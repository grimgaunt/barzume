'use strict'; 
console.log('Loading function');

var doc = require('aws-sdk');
let dynamo = new doc.DynamoDB();


exports.handler = (event, context, callback) => {

doc.config.update({
  region: "us-west-2",
  endpoint: "https://2f3hix8v07.execute-api.us-west-2.amazonaws.com/DEV/posting"
});


var params = {
    TableName : "posting",
    KeySchema: [       
        { AttributeName: "postingId", KeyType: "HASH"},  //Partition key
        { AttributeName: "postingTitle", KeyType: "RANGE"},
        { AttributeName: "postingDesc", KeyType: "RANGE"}//Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "postingId", AttributeType: "N" },
        { AttributeName: "postingTitle", AttributeType: "S" },
        { AttributeName: "postingDesc", AttributeType: "S"}
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamo.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
};