angular.module('app').factory('businessService',function ($resource){
   var conn = $resource('http://localhost:3000/business');

   return {

   load: function(){
 			var business = conn.get();
 			console.log(business);
 			return business;
	
			},

	store: function (data){


		conn.save(data);
		console.log (data);


			}        
   }
	
});