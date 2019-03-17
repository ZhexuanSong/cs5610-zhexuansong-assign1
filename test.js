module.exports = function(app) {
  app.get('/api/test', test);

  function test (req, res) {
    console.log("reached /api/test");
    res.status(200).send("Begin testing");
  }
}

