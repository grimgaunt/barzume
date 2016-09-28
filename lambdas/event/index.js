'use strict'; 
console.log('Loading function');

var doc = require('aws-sdk');
let dynamo = new doc.DynamoDB();


exports.handler = (event, context, callback) => {
    //GET params
    var paramGet = {
    TableName: 'events',
    Key: { 
        'eventsId':{"S":event.eventsId}
    },
    AttributesToGet: [ 
        'eventsName',
        'eventsPic'
    ]
    };
    //PUT params
    var paramPut = {
    TableName: 'organization',
    Key:{
       'eventsId':{'S':event.eventsId} 
    },
    UpdateExpression: "set eventsName = :n",
    ExpressionAttributeValues:{
        ":n":{"S":"Shotgun Willies"}
    },

    ReturnValues:"UPDATED_NEW"
    };
    //POST params   
    var paramPost = {
    TableName: 'events',
    Item: {
        "eventsId":{"S":"2"},
        "eventsName":{"S": "Grits n Such"},
        "eventsPic":{"S":"imgur.com"} 
    }
    };
    //DELETE params
    var paramDelete = {
    TableName: 'events',
    Key: { 
        'eventsId':{"S":event.eventsId}
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
    
 
           