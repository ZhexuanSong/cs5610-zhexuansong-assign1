var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server.js');
var Widget = mongoose.model('Widget', WidgetSchema);

Widget.createWidget = createWidget;
Widget.findAllWidgetsForPage = findAllWidgetsForPage;
Widget.findWidgetById = findWidgetById;
Widget.updateWidget = updateWidget;
Widget.deleteWidget = deleteWidget;
Widget.reorderWidgets = reorderWidgets;
Widget.resetWidgets = resetWidgets;

module.exports = Widget;

function createWidget(pageId, widget) {
  widget._page = pageId;
  widget.position = 999999;
  return Widget.create(widget);
}

function findAllWidgetsForPage(pageId) {
  return Widget.find({ _page: pageId }).sort({ position: 1, dateCreated: 1});
}

function findWidgetById(widgetId) {
  return Widget.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return Widget.findByIdAndUpdate(widgetId, widget, {new: true});
}

function deleteWidget(widgetId) {
  Widget.findById(widgetId, function (err, foundWidget) {
    var index = foundWidget.position;
    resetWidgets(index, foundWidget._page);
  });
  return Widget.findByIdAndRemove(widgetId);
}

function resetWidgets(index, pageId) {
  Widget.find({ _page: pageId }, function (err, widgets) {
    widgets.forEach(function (widget) {
      if (widget.position > index) {
        widget.position--;
        widget.save();
      }
    })
  })
}

function reorderWidgets(pageId, start, end) {
  return Widget.find({ _page: pageId }).sort({ position: 1, dateCreated: 1}).then(function (widgets) {
    var x = widgets[start];
    widgets.splice(start, 1);
    widgets.splice(end, 0, x);
    for (var i = 0; i < widgets.length; ++i) {
      widgets[i].position = i;
      widgets[i].save();
    }
    return {};
  });
}
