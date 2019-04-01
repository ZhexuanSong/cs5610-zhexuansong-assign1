module.exports=function (app) {
  var db = require("./models/models.server.js");

  require("./services/user.service.server")(app);
  require("./services/website.service.server")(app);
  require("./services/page.service.server")(app);
  require("./services/widget.service.server")(app);
};
