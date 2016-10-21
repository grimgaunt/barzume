'use strict'; 
console.log('Loading function');

var doc = require('aws-sdk');
let dynamo = new doc.DynamoDB();


exports.handler = (event, context, callback) => {
    //GET params
    var paramGet = {
    TableName: 'multipass',
    Key: { 
        'multipassID':{"S":event.multipassID}
    },
    AttributesToGet: [ 
        'eventID',
        'issueDate',
        'expiry'
    ]
    };
 
    //POST params   
    var paramPost = {
    TableName: 'multipass',
       Key: { 
        'multipassID':{"S":event.multipassID}
    },
    AttributesToGet: [
        'expiry'
    ]
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
            
        //POST request
        else if (event.httpMethod == "POST"){
        dynamo.putItem(paramPost, function(err, data) {
            if (err) {
        console.log("error --",err);
        context.fail(err);
        }
            else if (data.expiry ==='expired'){
        console.log("expired");
        return false;
            }

        
            else if (data.expiry === 'not expired') {
        console.log("not expired",data);
        return false;
            }
        })}
        
        
        else {
        context.fail('error! error!');
        }
        
    
    
};
    
 
           