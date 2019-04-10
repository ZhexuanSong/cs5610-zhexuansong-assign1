module.exports = function (app) {
  var multer = require('multer');
  var upload = multer({dest: __dirname + '/../../src/assets/uploads'});
  var mongoose = require("mongoose");

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget", reorderWidgets);
  app.post("/api/upload", upload.single('myFile'), uploadImage);
  var widgetModel = require("../model/widget/widget.model.server");

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    if (widgetId === '') {
      const newWidget = {
        _id: '',
        widgetType: '',
        pageId: '',
        size: '',
        text: '',
        width: '',
        url: ''
      };

      newWidget.widgetType = 'Image';
      newWidget.pageId = pageId;
      newWidget.url = '/uploads/' + filename;
      newWidget._id = widgetId;
      newWidget.width = width;
      widgetModel.findAllWidgetsForPage(pageId).then(function (widgets) {
        newWidget.position = widgets.length;
        widgetModel.createWidget(pageId, newWidget).then(function (widget) {
          widgetId = widget._id;
          res.redirect("https://webdev-jinhaoliu.herokuapp.com/user/" + userId + "/website/"
            + websiteId + "/page/" + pageId + "/widget/" + widgetId)

        });
      });
    } else {
      widgetModel.findWidgetById(widgetId).then(function (widget) {
        widget.url = '/uploads/' + filename;
        widgetModel.updateWidget(widgetId, widget);
        res.redirect("https://webdev-jinhaoliu.herokuapp.com/user/" + userId + "/website/"
          + websiteId + "/page/" + pageId + "/widget/" + widgetId)
      });
    }
    // http://localhost:3100
    // https://cs5610-webdev-yujunm.herokuapp.com

  }

  function reorderWidgets(req, res) {
    var pageId = req.params["pageId"];
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    return widgetModel
      .reorderWidgets(pageId, startIndex, endIndex);

  }

  function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params["pageId"];
    widgetModel.findAllWidgetsForPage(pageId).then(function (widgets) {
      widget.position = widgets.length;
      widgetModel.createWidget(pageId, widget).then(function (widget) {
        res.json(widget);
      });
    });

  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params["pageId"];
    widgetModel.findAllWidgetsForPage(pageId).then(function (widgets) {
      res.json(widgets);
    });
  }

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    widgetModel.findWidgetById(widgetId).then(function (widget) {
      res.json(widget);
    });
  }

  function updateWidget(req, res) {
    var widgetId = req.params["widgetId"];
    var widget = req.body;
    widgetModel.updateWidget(widgetId, widget).then(function (widget) {
      res.json(widget);
    });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params["widgetId"];
    widgetModel.findWidgetById(widgetId).then(function (widget) {
      widgetModel.updatePosition(widget._page, widget.position).then(function (widgets) {
        widgetModel.deleteWidget(widgetId).then(function (status) {
          res.send(status);
        });
      })
    });
  }
}
