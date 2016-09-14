var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema(

	{
	userName: String,
	userRating:[],
	userHistory:[],
	userPic:String,
	userPhone:String,
	userEmail:String,
	//I was thinking about Tinder premium "swipe in location" feature here, maybe give employees the option of location based or area search
	userHomeLoc:String	
  }
);


var user = mongoose.model("user", user);

module.exports = user