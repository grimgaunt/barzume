angular.module('app').factory('postingService',function ($resource){

	console.log('Trying to connect');


	var conn = $resource('http://localhost:3000/posting');
		console.log('connected /posting');

	return conn;

	
})