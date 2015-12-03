var app = angular.module('troveBlog', ['ngRoute', 'ui.router']);

app.run(function($rootScope, $state){

});

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
    .state('admin', {
      url: '/admin',
      templateUrl: './app/templates/admin.html',
      controller: 'AdminCtrl'
    })

  // $locationProvider.html5Mode(true);
});
