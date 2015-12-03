app.controller('LoginCtrl', function($scope, $location, Authentication, Users){

  $scope.login = function(user){
    // Authentication.login(user)
    // .then(function(){
    //   var loggedIn = Authentication.isLoggedIn();
    //   if(loggedIn){
    //     $location.path('/admin');
    //   } 
    // })
    var users = Users.users;
    console.log(users);
    var userExist = _.filter(users, function(userInDB){
      if(userInDB.email === user.email && userInDB.password === user.password){
        return true;
      }
      return false;
    });

    if(userExist.length >= 1){
      console.log("TRUE")
      $location.path('/admin');
      $scope.user = "";
    } else {
      console.log("FALSE");
      $scope.user = "";
    }
  }
})