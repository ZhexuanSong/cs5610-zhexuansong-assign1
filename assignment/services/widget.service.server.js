module.exports = function (app) {

    var multer = require('multer');
    var storage = multer.diskStorage({
        destination: __dirname + '/../../dist/my-project/assets/uploads/',
        filename: function (req, file, cb) {
            cb(null,  file.originalname);
        }
    });

    var upload = multer({storage: storage});

    var widgets = [
        {widgetId: '001', type: 'HEADING', pageId: '001', size: '30', text: 'Oldham to learn Scholes decision on Thursday', url: '', width: '100%'},
        {widgetId: '234', type: 'IMAGE', pageId: '001', size: '2', text: 'GIZMODO', url: 'https://thesefootballtimes.co/wp-content/uploads/2016/02/scholes.jpg', width: '100%'},
        {widgetId: '123', type: 'YOUTUBE', pageId: '001', size: '1', text: '', url: 'https://www.youtube.com/embed/APexI9Zb6iE', width: '80%'}
    ];

    var widgetModel = require('../model/widget/widget.model.server');
    var pageModel = require('../model/page/page.model.server');
    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findWidgetsForPage);
    app.get('/api/page/:pageId/widget/reorder', reorderWidget);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/widget/:widgetId', deleteWidget);
    app.post('/api/uploads', upload.single('myFile'), uploadImage);


    function uploadImage(req, res) {
        // var uid = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        //
        //
        var widgetId = req.body.widgetId;
        // var width = req.body.widtfh;
        var myFile = req.file;

        if (myFile == null) {
            res.status(200).send({message: 'No file uploaded'});
            return;
        }
        // var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in uploads folder
        // var path          = myFile.path;         // full path of uploaded file
        // var destination   = myFile.destination;  // folder where file is saved to
        // var size          = myFile.size;
        // var mimetype      = myFile.mimetype;

        var newWidgetId = req.body.newWidgetId;
        if (newWidgetId === '') {
            let url = 'assets/uploads/' + filename;
            res.status(200).send({message: 'File uploaded', url: url});
            return;
        }

        var widget = widgetModel.findWidgetById(websiteId);
        widget.url = 'assets/uploads/' + filename;
        widgetModel
            .updateWidget(widgetId, widget)
            .then(function(widget) {
                res.status(200).send(widget);
            }, function (error) {
                console.log('update widget error: ' + error);
                res.status(200).send({message: 'File uploaded', url: ''});
            });
    }

    function createWidget(req, res) {
        var pageId = req.params['pageId'];
        var widget = new Object();
        widget.name = req.body.name;
        widget.type = req.body.type;
        widget.text = req.body.text;
        widget.placeholder = req.body.placeholder;
        widget.url = req.body.url;
        widget.width = req.body.width;
        widget.height = req.body.height;
        widget.rows = req.body.rows;
        widget.size = req.body.size;
        widget.class = req.body.class;
        widget.icon = req.body.icon;
        widget.deletable = req.body.deletable;
        widget.formatted = req.body.formatted;
        widget.pageId = pageId;
        widgetModel
            .createWidget(widget)
            .then(function(widget) {
                res.status(200).send(widget);
                }, function (error) {
                console.log('create widget error: ' + error);
                res.status(200).send({message: 'Create Widget Failed!'});
        });
    }

    function findWidgetsForPage(req, res) {
        let pageId = req.params['pageId'];
        pageModel
            .findPageById(pageId)
            .then(function(page) {
                res.status(200).send(page.widgets);
            }, function (error) {
                console.log('find widget by page error: ' + error);
                res.status(200).send({message: 'Widget not found!'});
            });
    }

    function reorderWidget(req, res) {
        let pageId = req.params['pageId'];
        let initial = parseInt(req.query.index1);
        let final = parseInt(req.query.index2);
        widgetModel
            .reorderWidget(pageId, initial, final)
            .then(function(widgets) {
                res.status(200).send(widgets);
            }, function (error) {
                console.log('reorder widget error: ' + error);
                res.status(200).send({message: 'Reorder widget failed!'});
            });
    }

    function findWidgetById(req, res) {
        var widgetId = req.params['widgetId'];
        widgetModel
            .findWidgetById(widgetId)
            .then(function(widget) {
                res.status(200).send(widget);
            }, function (error) {
                console.log('find widget by id error: ' + error);
                res.status(200).send({message: 'Widget not found!'});
            });
    }

    function updateWidget(req, res) {
        var widgetId = req.params['widgetId'];
        var widget = req.body;
        widgetModel
            .updateWidget(widgetId, widget)
            .then(function(widget) {
                res.status(200).send(widget);
            }, function (error) {
                console.log('update widget error: ' + error);
                res.status(200).send({message: 'Widget not found!'});
            });
    }

    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];
        widgetModel
            .deleteWidget(widgetId)
            .then(function(widget) {
                res.status(200).send(widget);
            }, function (error) {
                console.log('delete widget error: ' + error);
                res.status(200).send({message: 'Widget not found!'});
            });
    }
}
