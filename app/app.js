var app = angular.module('troveBlog', ['ngRoute', 'ui.router', 'angularjs-dropdown-multiselect', 'firebase']);

app.constant('FIREBASE_URL', 'https://trove-blog.firebaseio.com/');

// app.run(function($rootScope, $location, $state, Authentication){
//   $rootScope.$on('$routeChangeStart', function(event){
//     if(!Authentication.isLoggedIn()){
//       event.preventDefault()
//       $location.path('/login');
//       console.log("Not logged in!")
//     }
//     else{
//       console.log("Logged in as: " + Authentication.isLoggedIn())
//     }
//   })
// });

app.config(function($stateProvider,  $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('feed', {
      url: '/',
      templateUrl: './app/templates/feed.html',
      controller: 'FeedCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './app/templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('singleEntry', {
      url: '/entry/:entryId',
      templateUrl: './app/templates/entry.html',
      controller: 'FeedCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: './app/templates/admin.html',
      controller: 'AdminCtrl'
    })

  // $locationProvider.html5Mode(true);
});
