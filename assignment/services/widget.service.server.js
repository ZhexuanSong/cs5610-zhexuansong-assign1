var _ = require('lodash');
module.exports = function (app) {
  var widgetModel = require("../model/widget/widget.model.server.js");
  var path = require('path');
  const multer = require('multer'); // npm install multer --save
  const baseUrl = 'http://webdev-zhexuan-cs5610.herokuapp.com';

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  app.put("/api/page/:pageId/widget?", reorderWidgets);

  var storage = multer.diskStorage({
    destination: __dirname + '/../../dist/web5610/assets/uploads/',
    filename: function (req, file, cb) {
      cb(null,  file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
  });
  const upload = multer({
    storage: storage
  }).single("myFile");
  //UPLOAD
  app.post ("/api/upload", upload, uploadImage);
  app.get("/api/image/:imageName", findImage);

  // var widgets = [
  //   {_id: '123', widgetType: 'HEADING', pageId: '321', size: '2', text: 'GIZMODO'},
  //   {_id: '234', widgetType: 'HEADING', pageId: '321', size: '4', text: 'Lorem ipsum'},
  //   {_id: '345', widgetType: 'IMAGE', pageId: '321', size: '2', text: 'text', width: '100%',
  //     url: 'http://lorempixel.com/400/200/'},
  //   {_id: '456', widgetType: 'HTML', pageId: '321', size: '2', text: '<p>Lorem ipsum</p>'},
  //   {_id: '678', widgetType: 'YOUTUBE', pageId: '321', size: '2', text: 'text', width: '100%',
  //     url: 'https://www.youtube.com//embed/eSLe4HuKuK0'}
  // ];

  function findImage(req, res) {
    var imageName = req.params.imageName;
    res.sendFile(path.resolve("/../../src/assets/uploads/" + imageName));
  }

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;
    var name = req.body.name;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    // condition when myFile is null
    const callbackUrl = baseUrl + '/user/' + userId + "/website/" + websiteId
      + "/page/" + pageId + "/widget";
    if (myFile == null) {
      res.redirect(callbackUrl + '/' + widgetId);
      return;
    }

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename; // new file name in upload folder
    //var filepath = myFile.path; // full path of uploaded file
    var destination = myFile.destination; // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    if (widgetId === '') {
      var widget = {_id: '', widgetType: 'IMAGE', pageId: pageId, size: '', text: '', width: '', url: '', name: ''};
      widget._id = (new Date()).getTime().toString();
      widget.url = baseUrl + '/assets/uploads/' + filename;

      console.log('create widget image: ' + widget._id);
      widgets.push(widget);
      res.redirect(callbackUrl + '/' + widget._id);
      return;
    }

    // find widget by id
    // var widget;
    // for (var i = 0; i < widgets.length; i++) {
    //   if (widgets[i]._id === widgetId) {
    //     widget = widgets[i];
    //     break;
    //   }
    // }
    //
    // widget.url = baseUrl+ '/uploads/' + filename;
    var imageUrl = baseUrl + "/assets/uploads/" + filename;
    var widget = { url: imageUrl };
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (stats) {
          res.send(200);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
    res.redirect(callbackUrl+ '/' + widgetId);
  }
  // var pick = ["widgetType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"];
  function createWidget(req, res) {
    var pageId = req.params.pageId;
    var widget = _.pick(req.body, ["widgetType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"]);
    console.log(widget);
    console.log(req.body);
    widgetModel.createWidget(pageId, widget).then(
      function (widget) {
        if (widget) {
          res.json(widget);
        } else {
          res.status(200).send({});
        }
      },
      function (err) {
        res.status(400).send(err);
      }
    );
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    widgetModel.findAllWidgetsForPage(pageId).then(
      function (widget) {
        res.json(widget);
      },
      function (err) {
        res.status(400).send(err);
      }
    );
  }

  function reorderWidgets(req, res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.initial);
    var endIndex = parseInt(req.query.final);

    widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (stats) {
        res.status(200).send({});
      }, function (err) {
        res.status(400).send(err);
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
          res.json(widget);
        },
        function (err) {
          res.status(404).send(err);
        });
  }

  function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var updatedWidget = _.pick(req.body,["widgetType", "name", "pageId", "size", "text", "url", "width", "height","rows", "formatted"]);
    widgetModel.updateWidget(widgetId, updatedWidget)
      .then(function (stats) {
          res.json(stats);
        },
        function (err) {
          res.status(404).send(err);
        });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    widgetModel.deleteWidget(widgetId).then(
      function (stats) {
        res.json(stats);
      },
      function (err) {
        res.status(404).send(err);
      }
    );
  }
};
