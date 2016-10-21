angular.module('app').service('chatService', function(){
	var PubNub = require('pubnub');
	var pubnub = new PubNub({
	publishKey: "pub-c-e165c5c7-e8bf-49ae-a001-8541dccc8eaa",
	subscribeKey: "sub-c-0091142c-841c-11e6-a68c-0619f8945a4f",
	logVerbosity: true
	});

	var receiver; 
	var sender;

	pubnub.subscribe({
    channels: ['barzume'],
    withPresence: true // also subscribe to presence instances.
	});

	return {

		chatHistory: function(reciever){
			pubnub.history({
    		channel : 'barzume' + receiver.id,
    		callback : function(m){
       		console.log(JSON.stringify(m))
    		},
   			count : 100, // 100 is the default
			reverse : false // false is the default
		});
		},

		prevChat: function(sender){
			pubnub.history({
    		channel : 'barzume' + sender.id,
    		callback : function(m){
       		console.log(JSON.stringify(m))
    		},
   			count : 100, // 100 is the default
			reverse : false // false is the default
		});


		},

		sendTo: function(receiver){
			

		pubnub.publish({
			channel   : 'barzume' + receiver.id,
			message   :  message,


		}, function (status, response) {
			if (status.error) {
            // handle error
            console.log(status)
        } else {
        	console.log("message Published w/ timetoken", response.timetoken)
        }
        });

		}


	}
	
});


