angular.module('app').controller('chatCtrl', function($scope, chatService){
	
	console.log('chat controller init');

	$scope.message = "placeholder";

	$scope.sendMsg = function(){
		chatService.sendMsg();
	}



})
