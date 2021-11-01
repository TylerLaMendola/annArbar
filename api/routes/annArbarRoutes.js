"use strict";
module.exports = function (app) {
  var deals = require("../controllers/annArbarController");

  // todoList Routes
  app.route("/deals").get(deals.allDeals);
};
