"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dealsSchema = new Schema({
  deals: [
    {
      barName: String,
      special: String,
      price: Number,
      calDate: Date,
      day: String,
    },
  ],
});

module.exports = mongoose.model("Deals", dealsSchema);
