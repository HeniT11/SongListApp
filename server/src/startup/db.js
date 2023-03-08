const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
  const db = process.env.DATABASE_URL;
  console.log({ db });
  mongoose.connect(db).then(() => console.log("connected to db"));
};
