module.exports = function (app) {
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

  // function list
  function createWidget(req, res) {
    var widget = req.body;
    var lastId = widgets[widgets.length-1]._id;
    widget._id = (+(lastId)+1).toString();
    widgets.push(widget);
    res.status(200).send(widget);
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
       console.log(curSite);
        res.status(200).send(curSite);
        return;
      }
    }
    res.status(404).send("Widget not found.");
    

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

}
