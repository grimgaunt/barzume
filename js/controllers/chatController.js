angular.module('app').controller('chatCtrl', function($scope){
console.log('chat controller init');
	$scope.message = "Placeholder";
	var pubnub = new PubNub({
		publishKey: "pub-c-e165c5c7-e8bf-49ae-a001-8541dccc8eaa",
		subscribeKey: "sub-c-0091142c-841c-11e6-a68c-0619f8945a4f",
		logVerbosity: true
	});

	$scope.sendMsg = function(){

		pubnub.publish({
			channel   : 'barzume',
			message   : $scope.message,

		}, function (status, response) {
			if (status.error) {
            // handle error
            console.log(status)
        } else {
        	console.log("message Published w/ timetoken", response.timetoken)
        }
    });

	}

	pubnub.subscribe({
    channels: ['barzume'],
    withPresence: true // also subscribe to presence instances.
	});

})




