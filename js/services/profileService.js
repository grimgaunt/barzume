angular.module('app').factory('userService',function ($resource){

	console.log('Trying to connect');


	var conn = $resource('http://localhost:3000/user');
		console.log('connected');

	return conn;

	
})