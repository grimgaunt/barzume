angular.module('app',['ngResource', 'ngRoute'])
.run(function(userService){
	var data = userService.load();
	return data;
});