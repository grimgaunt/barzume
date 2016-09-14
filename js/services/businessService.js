angular.module('app').factory('businessService',function ($resource){

	console.log('Trying to connect');


	var conn = $resource('http://localhost:3000/business');
		console.log('connected /business');

	return conn;

	
})