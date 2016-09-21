'use strict'; 
console.log('Loading function');

var doc = require('aws-sdk');
let dynamo = new doc.DynamoDB();


exports.handler = (event, context, callback) => {
    //GET params
    var paramGet = {
    TableName: 'user',
    Key: { 
        'userId':{"S":'one'}
    },
    AttributesToGet: [ 
        'userName',
        'userPic'
    ]
    };
    //PUT params
    var paramPut = {
    TableName: 'user',
    Key:{
       'userId':{'S':'one'} 
    },
    UpdateExpression: "set userName = :n",
    ExpressionAttributeValues:{
        ":n":{"S":"Bort"}
    },

    ReturnValues:"UPDATED_NEW"
    };
    //POST params   
    var paramPost = {
    TableName: 'user',
    Item: {
        "userId":{"S":"two"},
        "userName":{"S": "Linda"},
        "userPic":{"S":"imgur.com"} 
    }
    };
    //DELETE params
    var paramDelete = {
    TableName: 'user',
    Key: { 
        'userId':{"S":'two'}
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
    
 
           