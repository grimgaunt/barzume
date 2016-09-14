var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var business = new Schema(
  {
  businessName: String,
  businessLoc:String,
  businessRating:[],
  businessType: String,
  businessPic: String,
  businessPhone:String,
  businessEmail:String	
  }
);

var business = mongoose.model("business", business);

module.exports = business