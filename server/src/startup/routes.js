const song = require("../routes/song");
const stats = require("../routes/stats");
const error = require("../middleware/error");
module.exports = function (app) {
  app.use("/api/song", song);
  app.use("/api/stats", stats);
  app.use(error);
};
