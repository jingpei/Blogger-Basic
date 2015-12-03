app.controller('LoginCtrl', function($scope, $location, Authentication, Users){

  $scope.login = function(user){
    Authentication.login(user);
    $scope.user = {};
  }
})