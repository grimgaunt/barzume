angular.module('app').service('multipassService', function($resource){

   var conn = $resource('https://2f3hix8v07.execute-api.us-west-2.amazonaws.com/DEV/multipass');

   return {

   load: function(){
 			var multipass = conn.get();
 			console.log(multipass);
 			return multipass;
	
			},

	check: function (id){


			var expiry = conn.get(id);
			return expiry;

			}        
   }
	
});


