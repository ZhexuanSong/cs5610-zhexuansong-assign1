var mongoose = require('mongoose');

var widgetSchema = require('./widget.schema.server');

var pageModel = require('../page/page.model.server');
var widgetModel = mongoose.model('Widget', widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWIdget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
  return widgetModel.create(widget)
    .then((newWidget) => {
      createWidgetInPage(pageId, newWidget);
      return newWidget;
    });
}

function findAllWidgetsForPage(pageId) {
  return widgetModel.find({"pageId": pageId});
}

function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
 updateWidgetInPage(widget);
 return widgetModel.findByIdAndUpdate(widgetId, widget);
}

function deleteWidget(widgetId) {
  deleteWidgetInPage(widgetId);
  return widgetModel.findByIdAndRemove(widgetId);
}

function reorderWidget(pageId, start, end){
  return pageModel.findPageById(pageId)
    .then(function (page) {
      if (page) {
        swapArray(page.widgets,start,end);
        return page.save();
      }
      else {
        return null;
      }

    }, function (err) {
      return null;
    })
}

function swapArray(arr, old_index, new_index) {
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

function createWidgetInPage(pageId, widget) {
  pageModel.createPageWidgets(pageId, widget);
}

function updateWidgetInPage(widget) {
  pageModel.updatePageWidgets(widget.pageId, widget);
}

function deleteWidgetInPage(widgetId) {
  widgetModel.findWidgetById(widgetId)
    .then((widget) => {
      pageModel.deletePageWidgets(widget.pageId, widgetId);
    })
}
