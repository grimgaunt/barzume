

angular.module('app')


.config(function($routeProvider) {
  $routeProvider

  .when('/profile', {
        templateUrl: 'templates/profile.html',
        controller: 'userCtrl'
    
  })

   .when('/business', {
        templateUrl: 'templates/business.html',
        controller: 'business'

  })

  .when('/posting', {
          templateUrl: 'templates/posting.html',
          controller: 'posting'
    })

  .when('/regprofile', {
          templateUrl: 'templates/regprofile.html',
          controller: 'regprofile'
    });



  
  
});
