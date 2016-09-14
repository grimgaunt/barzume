angular.module('app').factory('postingService',function ($resource){
   var conn = $resource('http://localhost:3000/posting');

   return {

   load: function(){
 			var posting = conn.query();
 			console.log(posting);
 			return posting;
	
			},

	store: function (data){


		conn.save(data);
		console.log (data);


			}        
   }
	
});