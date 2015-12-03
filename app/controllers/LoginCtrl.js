app.controller('LoginCtrl', function($scope, $location, Users){

  $scope.login = function(user){
    var users = Users.users;
    console.log(users);
    var userExist = _.filter(users, function(userInDB){
      if(userInDB.email === user.email && userInDB.password === user.password){
        return true;
      }
      return false;
    });

    if(userExist.length >= 1){
      $location.path('/admin');
      $scope.user = "";
    } else {
      $scope.user = "";
    }
  }
})