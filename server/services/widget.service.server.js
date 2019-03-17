module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({dest: __dirname+'/../../public/images'});

  // fake data
  var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",

      "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",

      "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}

  ];
  // api list
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findWidgetsByPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  // route of reordering the widgets
  app.put('/api/page/:pageId/widget', sortWidget);  // '/page/:pageId/widget?initial=index1&final=index2'
  // route of upload the image
  app.post('/api/upload/', upload.single('imageAdded'), uploadImage);  // the upload.single has to include the name of file uploading element in html
  app.get('/images/:fileName', (req, res) => {
    var fileName = req.params["fileName"];
    var localpath = __dirname+'/../../public/images/'+fileName;
    var path = require('path');
    res.sendFile(path.resolve(localpath));
  });

  // function list
  function createWidget(req, res) {
    var widget = req.body;
    var lastId = widgets[widgets.length-1]._id;
    widget._id = (+(lastId)+1).toString();
    widgets.push(widget);
    res.status(201).send(widget);
  }

  function findWidgetsByPage(req, res) {
    var pageId = req.params["pageId"];
    let list = [];
    for (var widget of widgets)  {
      if (widget.pageId === pageId) {
        list.push(widget);
      }
    }
    res.status(200).send(list);

  }
  function findWidgetById(req, res){
    var widgetId = req.params["widgetId"];
    var widget = JSON.parse(getWidgetById(widgetId));
    res.status(200).send(widget);


  }

  function updateWidget(req, res) {
    var widgetId = req.params["widgetId"];
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widget;
        res.status(200).send(widget);
        return;
      }
    }
    res.status(404).send("Widget not fount by delete widget");
  }

  function deleteWidget(req, res) {
    var widgetId = req.params["widgetId"];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i,1);
        res.status(200).send(widgets);
        return;
      }
    }
    res.status(404).send("Widget not fount by delete widget");
  }

  function sortWidget(req, res) {
    var startIndex = req.query.initial;
    var endIndex = req.query.final;
    // console.log("The startIndex received is: "+startIndex);
    // console.log("The endIndex received is: "+endIndex);

    var widgetArray = req.body;
    var startItem = widgetArray[startIndex];
    widgetArray.splice(startIndex, 1);
    widgetArray.splice(endIndex, 0, startItem);
    widgets = updateOrder(widgets, widgetArray);
    res.status(200).send(widgetArray);
  }

  function uploadImage(req, res) {
    console.log("backend upload image called.")
    // extract attributes of req.body
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    // extract attributes from req.file
    var myFile = req.file;
    console.log(myFile);
    if(myFile == null) {
      return;
    }
    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename; // new file name in upload folder
    var path = myFile.path; // full path of uploaded file
    console.log("image path is: "+path);
    var destination = myFile.destination; // folder where file is saved to
    console.log("image destination is: "+destination);

    var size = myFile.size;
    var mimetype = myFile.mimetype;

    // set the image new url to this image widget
    var widgetString = getWidgetById(widgetId);
    var widget = JSON.parse(widgetString);      // getWidgetById() returns a string!! need JSON.parse() to convert string to a valid json.


    widget.url = app.settings.baseUrl+'/images/'+filename;
    // widget.url = 'images/'+filename;
    console.log("widget url is "+widget.url);


    updateWidgetById(widgetId, widget);
    var callbackUrl = app.settings.baseUrl+"/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId;
    //console.log(app.settings.baseUrl);
    res.redirect(callbackUrl);

  }
  function updateWidgetById(widgetId, widget) {
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widget;
        return;
      }
    }
  }

  function getWidgetById(widgetId) {
    var curSite = null;
    for (var w of widgets) {
      if (w._id === widgetId) {
        let size = (w.size === undefined) ? 1 : w.size;
        let text = (w.text === undefined) ? "text" : w.text;
        let width = (w.width === undefined) ? "100%" : w.width;
        let url = (w.url === undefined) ? "" : w.url;

        curSite = '{"_id":"'+ w._id.toString() +
          '", "widgetType":"'+ w.widgetType.toString() +
          '", "pageId":"' + w.pageId.toString() +
          '", "size":'+ size +
          ', "text":"' + text.toString() +
          '", "width":"' + width.toString() +
          '", "url":"' + url.toString() +'"}';
        // console.log(curSite);
        return curSite;
      }
    }
    return curSite;
  }
  function updateOrder(widgets, internalArray) {
    var ptr = 0;
    var widgetPtr = 0;
    while (ptr < internalArray.length) {
      if (widgets[widgetPtr].pageId === internalArray[ptr].pageId) {
        widgets[widgetPtr++] = internalArray[ptr++];
      } else {
        widgetPtr++;
      }
    }
    return widgets;
  }

}
