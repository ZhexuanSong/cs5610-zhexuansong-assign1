module.exports= function(app){

    let widgets = [
        { _id: "123", widgetType: "HEADER", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "234", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
        { _id: "456", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "567", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "321", size: "", text: "", url: 'https://www.youtube.com/embed/mFkli0wD4-w', width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "789", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' }
    ];

    let widgetModel = require('../model/widget/widget.model.server');
    let multer = require('multer'); // npm install multer --save
    const path = require('path');
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + '/../../dist/xuan-project1/assets/uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
        }
    })

    let upload = multer({ storage: storage });

    /* John pappy's - declare APIs at top and write functions below */

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.put("/api/widget/:widgetId",updateWidget);
    app.delete("/api/widget/:widgetId",deleteWidget);

    app.put("/api/page/:pageId/widget?",reorderWidgets);

    //UPLOAD
    app.post ("/api/upload", upload.single('myFile'), uploadImage);

    function createWidget (req,res) {
        let widget = req.body;
        let pageId = req.params['pageId'];
        widgetModel
            .createWidget(pageId, widget)
            .then(function (widget) {
                console.log('widget server service: ' + widget);
                res.json(widget);
            }, function (err) {
                res.status(400).send(err);
            });
    }

    function findAllWidgetsForPage (req,res) {
        let pageId = req.params.pageId;
        widgetModel
            .findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                    res.json(widgets);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

    function findWidgetById (req,res) {
        let widgetId  = req.params.widgetId;
        widgetModel
            .findWidgetById(widgetId)
            .then(function (widget) {
                    res.json(widget);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

    function updateWidget (req,res) {
        let widgetId  = req.params.widgetId;
        console.log('widget server service: ' + widgetId);
        let widget = req.body;
        console.log('widget server service: ' + widget);
        widgetModel
            .updateWidget(widgetId, widget)
            .then(function (stats) {
                    console.log('widget server service: ' + stats);
                    res.json(stats);
                },
                function (err) {
                    res.status(404).send(err);
                });
    }

    function deleteWidget (req,res) {
        let widgetId  = req.params.widgetId;
        widgetModel
            .deleteWidget(widgetId);
    }


    function reorderWidgets(req,res) {
        let startIndex = parseInt(req.query.start);
        let endIndex = parseInt(req.query["end"]);
        let pageId = req.params['pageId'];
        widgetModel
            .reorderWidgets(pageId, startIndex, endIndex);
    }

    /* pattern matching usies only base URL. it ignores anything after ?
     app.get("/api/user/:userId", findUserById);
     app.get("/api/user/:userId", findUserById);
     are the same URLs to Express!     */
    function uploadImage(req, res) {
        let userId = req.body.userId;
        let websiteId = req.body.websiteId;
        let pageId = req.body.pageId;


        let widgetId      = req.body.widgetId;
        let width         = req.body.width;
        let myFile        = req.file;

        //let baseUrl = 'http://localhost:3200';
        let baseUrl = 'http://webdev-zhexuan-cs5610.herokuapp.com';
        const callbackUrl = baseUrl + '/user/' + userId + "/website/" + websiteId
            + "/page/" + pageId + "/widget";
        if(myFile == null) {
            res.redirect(callbackUrl + "/" + widgetId);
            return;
        }


        let originalname  = myFile.originalname; // file name on user's computer
        let filename      = myFile.filename;     // new file name in upload folder
        let path          = myFile.path;         // full path of uploaded file
        let destination   = myFile.destination;  // folder where file is saved to
        let size          = myFile.size;
        let mimetype      = myFile.mimetype;

        let url = '/assets/uploads/' + filename;
        console.log(url);

        widgetModel.findWidgetById(widgetId).then(
            function (widget) {
                widget.url = url;
                widgetModel.updateWidget(widgetId, widget).then(function (widget) {
                    console.log('widget server: ' + widget);
                });
            }
        );
        res.redirect(callbackUrl + "/" + widgetId);
    }
};
