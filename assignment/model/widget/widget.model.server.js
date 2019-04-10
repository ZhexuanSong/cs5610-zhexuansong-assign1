var mongoose =  require('mongoose');
var widgetSchema = require('./widget.schema.server');

var widgetModel = mongoose.model('widget', widgetSchema);
var pageModel = require('../page/page.model.server');


widgetModel.createWidget = createWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.findWidgetsByPage = findWidgetsByPage;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

function createWidget(widget) {
    return widgetModel.create(widget)
        .then(
            function (response) {
                pageModel.findById(widget.pageId).then(
                    function (page) {
                        page.widgets.push(response);
                        return page.save();
                    }
                )
            }
        );
}

function findWidgetById(id) {
    return widgetModel.findById(id);
}


function findWidgetsByPage(pageId) {
    return widgetModel.find({pageId:pageId});
}

function updateWidget(widgetId,widget) {
    return widgetModel.findByIdAndUpdate(widgetId, widget,{new: true})
        .then(
            function (responsePage) {
                pageModel.findPageById(widget.pageId)
                    .then(
                        function (page) {
                            const index = findIndex(page.widgets, widgetId);
                            page.widgets.splice(index, 1);
                            page.widgets.splice(index, 0, responsePage);
                            return page.save();
                        }
                    )
            }
        );
}

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id.toString() === target.toString()) {
            return i;
        }
    }
    return -1;
}

function deleteWidget(widgetId){
    return widgetModel.findByIdAndRemove(widgetId).then(
        function (response) {
            pageModel.findByIdAndUpdate(
                response.pageId,
                {$pull: {'widgets': {_id: widgetId}}},
                {safe: true, new: true},
                function (err) {
                    console.log(err);
                }
            );
        }
    );
}

Array.prototype.move = function (start, end) {
    this.splice(end, 0, this.splice(start, 1)[0]);
};

function reorderWidget(pageId, start, end) {
    return pageModel.findPageById(pageId)
        .then(function (page) {
            if (page) {
                page.widgets.move(start, end);
                return page.save();
            }
        }, function (err) {
            console.log(err);
        });
    // return pageModel.findPageById(pageId).then(
    //     function (page) {
    //         let result = JSON.parse(JSON.stringify(page.widgets));
    //         // console.log(test);
    //         array_swap(result, start, end);
    //         // console.log(test);
    //         for (var i = 0; i < result.length; i++) {
    //             widgetModel.updateWidget(result[i]._id, result[i]);
    //         }
    //     }
    // )
}



// function array_swap(arr, startIndex, endIndex) {
//     arr.splice(endIndex, 0, arr.splice(startIndex, 1));
// }

module.exports = widgetModel;
