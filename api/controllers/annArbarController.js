"use strict";
var MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://annarbar:annarbar@cluster0.savqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.allDeals = function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("AnnArbar");
    dbo
      .collection("deals")
      .find()
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  });
};
