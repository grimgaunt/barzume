var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var posting = new Schema(
  {
  postingTitle:String,
  //redundant? maybe just use employers:employerLoc
  postingLoc: String,
  postingDesc:String,
  postingPay: Number,
  datePosted: Date
  }
);

var posting = mongoose.model("posting", posting);

module.exports = posting