angular.module('app').controller('businessCtrl', function($scope, $resource, businessService){
console.log('business controller init');


$scope.data = {};


$scope.data = businessService.load();

$scope.addBusiness = function(){
	var newBusiness ={};
	businessService.store(newBusiness);
};


})




