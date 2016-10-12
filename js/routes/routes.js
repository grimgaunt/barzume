

angular.module('app')


.config(function($routeProvider) {
  $routeProvider

  .when('/profile', {
        templateUrl: './templates/profile.html',
        controller: 'userCtrl'
    
  })

  .when('/regprofile', {
        templateUrl: './templates/regprofile.html',
        controller: 'userCtrl'

  })

  .when('/business', {
          templateUrl: './templates/business.html',
          controller: 'businessCtrl'
  })

  .when('/regbusiness', {
          templateUrl: './templates/regbusiness.html',
          controller: 'businessCtrl'
  })

  .when('/posting', {
          templateUrl: './templates/posting.html',
          controller: 'postingCtrl'
  })

    .when('/regposting', {
          templateUrl: './templates/regposting.html',
          controller: 'postingCtrl'

 
  
  })

     .when('/chat', {
          templateUrl: './templates/chat.html',
          controller: 'chatCtrl'


  });
  
});
