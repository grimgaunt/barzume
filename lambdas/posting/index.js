'use strict'; 
console.log('Loading function');

var doc = require('aws-sdk');
let dynamo = new doc.DynamoDB();


exports.handler = (event, context, callback) => {
    //GET params
    var paramGet = {
    TableName: 'posting',
    Key: { 
        'postingId':{"N":"3"}
    },
    AttributesToGet: [ 
        'postingTitle',
        'postingDesc'
    ]
    };
    //PUT params
    var paramPut = {
    TableName: 'posting',
    Key:{
       'postingId':{'N':'1'} 
    },
    UpdateExpression: "set postingTitle = :t",
    ExpressionAttributeValues:{
        ":t":{"S":"tends bar well"}
    },

    ReturnValues:"UPDATED_NEW"
    };
    //POST params   
    var paramPost = {
    TableName: 'posting',
    Item: {
        "postingId":{"N":"2"},
        "postingName":{"S": "dishwasher"},
        "postingDesc":{"S":"washes dishes"} 
    }
    };
    //DELETE params
    var paramDelete = {
    TableName: 'posting',
    Key: { 
        'postingId':{"N":'2'}
    }
    };
    
        //GET request
        if (event.httpMethod == "GET"){
            if(paramGet.postingId === 3){
                dynamo.scan(paramGet, function(err, data) {
                        if (err) {
                            console.log("error --",err);
                            context.fail(err);
                                }
                        else {
                            console.log("getallitems =",data); // successful response
                            context.succeed(data);
                            }
                        });
                     }
        else dynamo.getItem(paramGet, function(err, data) {
            if (err) {
        console.log("error --",err);
        context.fail(err);
        }
        
            else {
        console.log("getoneitem =",data); // successful response
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
    
 
           