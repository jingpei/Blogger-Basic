app.factory('Authentication', function(FIREBASE_URL, $firebaseAuth){
  var db = new Firebase(FIREBASE_URL);
  var authObj = $firebaseAuth(db);
  var uniqueId, loggedInUser;

  return {
    login: function(credentials){
      authObj.$authWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      .then(function(authData){
        console.log("Logged in as: ", authData.email);
        loggedInUser = authData.email;
        uniqueId = authData.uid;
      })
      .catch(function(err){
        console.error("Login failed: ", error)
      })
    },
    isLoggedIn: function(){
      var authData = authObj.$getAuth();
      if(authData){
        console.log("Logged In As: ", loggedInUser);
        return true;
      } else {
        console.log("Not Logged In");
        return false;
      }
    },
    getUserData: function(){
      return loggedInUser;
    }
  }
})