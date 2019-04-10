let mongoose = require('mongoose');

let widgetSchema = require('./widget.schema.server');
let widgetModel = mongoose.model("Widgets", widgetSchema);
let pageModel = require('../page/page.model.server');

module.exports = widgetModel;

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidgets = reorderWidget;


function createWidget(pageId,widget) {
    widget._page = pageId;
    return widgetModel.create(widget)
        .then(
            function (widget) {
                pageModel.findPageById(pageId)
                    .then(
                        function (page) {
                            widget.position = page.widgets.length;
                            page.widgets.push(widget);
                            widget.save();
                            page.save();
                        }
                    );
                return widget;
            }
        );
}

function findAllWidgetsForPage(pageId) {
    return widgetModel.find({_page:pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.findByIdAndUpdate(widgetId,widget);
}

function deleteWidget(widgetId) {
    return findWidgetById(widgetId).then(function(widget) {
        widgetModel.remove({_id: widgetId}).then(function() {
            updatePosition(widget._page, widget.position).then(function() {
                pageModel.findPageById(widget._page).then(function(page) {
                    if (page != null) {
                        for (let i = 0; i < page.widgets.length; i++) {
                            if (page.widgets[i]._id.equals(widgetId)) {
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

function updatePosition (pageId, position) {
    return widgetModel.find({_page: pageId}).then(function(widgets) {
        widgets.forEach(function(widget) {
            if (widget.position > position){
                widget.position--;
                widget.save();
            }
        })
    })
}

function reorderWidget(pageId, start, end) {
    console.log('start: ' + start + ' end: ' + end);
    return widgetModel.find({_page: pageId}).then(function(widgets) {
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
        });
        console.log('reorder model all: ' + widgets);
    })
}
