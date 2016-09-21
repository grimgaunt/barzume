'use strict'; 
console.log('Loading function');

var doc = require('aws-sdk');
let dynamo = new doc.DynamoDB();


exports.handler = (event, context, callback) => {
    //GET params
    var paramGet = {
    TableName: 'business',
    Key: { 
        'businessId':{"S":'one'}
    },
    AttributesToGet: [ 
        'businessName',
        'businessPic'
    ]
    };
    //PUT params
    var paramPut = {
    TableName: 'business',
    Key:{
       'businessId':{'S':'one'} 
    },
    UpdateExpression: "set businessName = :n",
    ExpressionAttributeValues:{
        ":n":{"S":"Shotgun Willies"}
    },

    ReturnValues:"UPDATED_NEW"
    };
    //POST params   
    var paramPost = {
    TableName: 'business',
    Item: {
        "businessId":{"S":"two"},
        "businessName":{"S": "Linda"},
        "businessPic":{"S":"imgur.com"} 
    }
    };
    //DELETE params
    var paramDelete = {
    TableName: 'business',
    Key: { 
        'businessId':{"S":'two'}
    }
    };
    
        //GET request
        if (event.httpMethod == "GET"){
        dynamo.getItem(paramGet, function(err, data) {
            if (err) {
        console.log("error --",err);
        context.fail(err);
        }
        
            else {
        console.log("item =",data); // successful response
        context.succeed(data);
            }
        })}
        //PUT request
        else if (event.httpMethod == "PUT"){
        dynamo.updateItem(paramPut, function(err, data) {
            if (err) {
        console.log("error --",err);
        context.fail(err);
        }
        
            else {
        console.log("item =",data); // successful response
        context.succeed(data);
            }
        })}
        
        
        //POST request
        else if (event.httpMethod == "POST"){
        dynamo.putItem(paramPost, function(err, data) {
            if (err) {
        console.log("error --",err);
        context.fail(err);
        }
        
            else {
        console.log("item =",data); // successful response
        context.succeed('got POST');
            }
        })}
        
        //DELETE request
        else if (event.httpMethod == "DELETE"){
        dynamo.deleteItem(paramDelete, function(err, data) {
            if (err) {
        console.log("error --",err);
        context.fail(err);
        }
        
            else {
        console.log("item =",data); // successful response
        context.succeed("got DELETE");
            }
        })}
        
        else {
        context.fail('error! error!');
        }
        
    
    
};
    
 
           