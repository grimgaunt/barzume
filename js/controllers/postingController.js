angular.module('app').controller('postingCtrl', function($scope, $resource, postingService){
console.log('posting controller init');


$scope.data = {};


$scope.data = postingService.load();

$scope.addPosting = function(){
	var newPosting={};
	postingService.store(newPosting);
};


})




