
module.exports=function (app) {

  var multer = require('multer');
  var storage = multer.diskStorage({
    destination: __dirname + '/../../dist/myWeb5610/assets/uploads',
    filename(req, file, callback) {
      callback(null, file.originalname)
    }
  });
  var upload = multer({storage: storage});

  var pageModel = require('../model/page/page.model.server');
  var widgetModel = require('../model/widget/widget.model.server');
  app.get('/api/widget/:widgetId', findWidgetById);
  app.get('/api/page/:pageId/widget', findAllWidgetsByPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  app.get('/api/page/:pageId/widget/reorder', reorderWidgets);

  app.post('/api/uploads', upload.single('myFile'), uploadImage);

  function findWidgetById(req, res) {
    const widgetId = req.params.widgetId;
    widgetModel.findWidgetById(widgetId)
      .then((widget) => {
        res.json(widget);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function createWidget(req, res) {
    const pageId = req.params.pageId;
    const widget = req.body;
    widget.pageId = pageId;
    widgetModel.createWidget(pageId, widget)
      .then((widget) => {
        res.json(widget);
          }, (err) => {
        res.status(404).send(err);
      });
  }

  function findAllWidgetsByPage(req, res) {
    const pageId = req.params.pageId;
    widgetModel.findAllWidgetsForPage(pageId)
      .then((widgets) => {
        res.json(widgets);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function updateWidget(req, res) {
    const widgetId = req.params.widgetId;
    const widget = req.body;
    widgetModel.updateWidget(widgetId, widget)
      .then((widget) => {
        res.json(widget);
      }, (err) => {
        res.status(404).send(err);
      });
  }

  function deleteWidget(req, res) {
    const widgetId = req.params.widgetId;
    widgetModel.deleteWIdget(widgetId)
      .then((data) => {
        res.json(data);
      }, (err) => {
        res.status(404).send(err);
      });
  }


  function reorderWidgets(req, res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);

    widgetModel.reorderWidget(pageId, startIndex, endIndex).then((data) => {
      res.json(data);
    }, (err) => {
      res.status(400).send(err);
    });
  }


  function uploadImage(req, res) {

    var widgetId = req.body.widgetId;
    var myFile = req.file;

    if (myFile == null) {
      res.status(200).send('no file');
      return;
    }

    var filename = myFile.filename;     



    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].widgetId === widgetId) {
        widgets[i].url = 'assets/uploads/' + filename;
        res.status(200).send({message: 'file uploaded'});
        return;
      }
    }
  }


  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }

};
