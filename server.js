var posting = require('./js/schema/postingSchema.js');
var user = require('./js/schema/userSchema.js');
var business = require('./js/schema/businessSchema.js');
var mongoose = require('mongoose');
var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost:27017/barzume');
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//user REST functions
app.get('/user', function(req, res) {
	user.findOne({userEmail:'bartender@gmail.com'}, function(err, user){
	if (err) {
		console.log(err, err.stack);
		res.send(err);
	}
	//console.log(user);
	
	res.send(user);

});
});

app.post('/user', function(req, res){
	
	var post = new user({
		userName: req.body.userName
	});
	console.log(post);



	post.save();

	res.send('user data posted')
});

//business REST functions
app.get('/business', function(req, res) {
	business.findOne({businessEmail:'end@aol.com'}, function(err, bus){
	if (err) {
		console.log(err, err.stack);
		res.send(err);
	}
	//console.log(bus);
	res.send(bus);

});
});

app.post('/business', function(req, res){
	var businesses = new business(
  {
  businessName: "Just Grits",
  businessLoc:"Ft Morgan",
  businessRating:[],
  businessType: "grits",
  businessPic: "http://gritpics.com",
  businessPhone:"555-404-1812",
  businessEmail:"gritsallday@compuserv.net"
  }
);

	businesses.save();
	res.send('business data posted')
});

//posting REST functions
app.get('/posting', function(req, res) {
	posting.find({postingLoc:'Denver'}, function(err, post){
	if (err) {
		console.log(err, err.stack);
		res.send(err);
	}
	
	res.send(post);

});
});

app.post('/posting', function(req, res){
	var postings = new posting(
  {
  postingTitle:"Restaurant Manager",
  postingLoc: "Denver",
  postingDesc:"Manage",
  postingPay: 25.00,
  datePosted: "04-20-2020"
  } 
);

	postings.save();
	res.send('posting data posted')
	
});

app.listen(3000, function(){
	console.log("listening on 3000")

});


