const mongoose = require("mongoose");
const WidgetSchema = require("./widget.schema.server");
const WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

const pageModel = require("../page/page.model.server");

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;
WidgetModel.updatePosition = updatePosition;

module.exports = WidgetModel;

function updatePosition (pageId, position) {
  return WidgetModel.find({_pageId: pageId}).then(function(widgets) {
    widgets.forEach(function(widget) {
      if (widget.position > position){
        widget.position--;
        widget.save();
      }
    })
  })
}

function createWidget(pageId, widget) {
  const promise = WidgetModel.create(widget);
  promise
    .then(function(responseWidget) {
      pageModel.findPageById(pageId).then(function(page) {
        responseWidget.position = page.widgets.length;
        responseWidget.save();
        page.widgets.push(responseWidget);
        page.save();
      })
  });
  return promise;
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({_pageId: pageId})
    .populate('_pageId', 'name')
    .exec();
}

function findWidgetById(widgetId) {
  return WidgetModel.findById({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, {$set:widget});
}

function deleteWidget(widgetId) {
  return findWidgetById(widgetId).then(function(widget) {
    WidgetModel.remove({_id: widgetId}).then(function() {
      updatePosition(widget._pageId, widget.position).then(function() {
        pageModel.findPageById(widget._pageId).then(function(page) {
          if (page != null) {
            for (let i = 0; i < page.widgets.length; i++) {
              if (page.widgets[i].equals(widgetId)) {
                page.widgets.splice(i, 1);
                return page.save();
              }
            }
          }
        })
      })
    })
  })
}

function reorderWidget(pageId, start, end) {
  return WidgetModel.find({_pageId: pageId}).then(function(widgets) {
    widgets.forEach(function(widget) {
      if (start < end) {
        if (widget.position === start) {
          widget.position = end;
          widget.save();
        } else if (widget.position > start && widget.position <= end) {
          widget.position--;
          widget.save();
        }
      } else {
        if (widget.position === start){
          widget.position = end;
          widget.save();
        } else if (widget.position < start && widget.position >= end){
          widget.position++;
          widget.save();
        }
      }
    })
  })
}
