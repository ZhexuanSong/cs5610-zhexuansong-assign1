module.exports = (app) => {
    app.get('/api/hello', helloWorld);

    function helloWorld(req, res) {
        res.send("Hello World!");
    }
}
