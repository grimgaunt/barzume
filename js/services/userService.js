angular.module('app').service('userService', function($resource){

   var conn = $resource('http://localhost:3000/user');

   return {

   load: function(){
 			var user = conn.get();
 			console.log(user);
 			return user;
	
			},

	store: function (data){


		conn.save(data);
		console.log (data);


			}        
   }
	
});


