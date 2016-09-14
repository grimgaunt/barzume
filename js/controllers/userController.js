angular.module('app').controller('userCtrl', function($scope, $resource, userService){
console.log('servertest controller init');


$scope.data = {};
$scope.newUser="placeholder";

$scope.data = userService.load();

$scope.addUser = function(){
	var newUser={userName:$scope.newUser};
	userService.store(newUser);
};


})




