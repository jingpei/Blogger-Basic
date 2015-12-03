app.factory('Users', function(){
  return {
    users: [{email: 'Richard.scudellari@gmail.com', password: 'rich1234!'}],
    registerUser: function(user){
      this.users.push({
        email: user.email,
        password: user.password
      })
    }
  }
})