var posting = require('./postingSchema.js');
var user = require('./userSchema.js');
var business = require('./businessSchema.js');
var mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/barzume');

var users = new user(
{
	userName: "Bart Tender",
	userRating:[],
	userHistory:[],
	userPic: "http://genericurl.com",
	userPhone:"303-303-3030",
	userEmail: "bartender@gmail.com",
	//I was thinking about Tinder premium "swipe in location" feature here, maybe give employees the option of location based or area search
	userHomeLoc: "Denver"
  }
);

var postings = new posting(
  {
  postingTitle:"Bartender",
  //redundant? maybe just use employers:employerLoc
  postingLoc: "Denver",
  postingDesc:"tends bar",
  postingPay: 12.00,
  datePosted: "12-12-1999"
  }
);

var businesses = new business(
  {
  businessName: "Eats n Drinks",
  businessLoc:"Denver",
  businessRating:[],
  businessType: "Family Style Dive Bar",
  businessPic: "http://genericurl.com",
  businessPhone:"720-730-7207",
  businessEmail: "end@aol.com"
  }

);

users.save();
postings.save();
businesses.save()