app.controller('AdminCtrl', function($scope, Content, Authentication, FIREBASE_URL, $location, $firebaseArray, $firebaseObject){
  // Initialize Firebase Objects
  var db = new Firebase(FIREBASE_URL);
  var fbEntries = db.child('entries');
  $scope.entries = $firebaseArray(new Firebase('https://trove-blog.firebaseio.com/entries'));

  // Check login
  // if(!Authentication.isLoggedIn()){
  //   $location.path('/')
  // }
  
  $scope.img = "";
  var index = -1;

  // Category selection directive models
  $scope.selectedCategories = [];
  $scope.categories = [
    {id: 1, label: 'Style'},
    {id: 2, label: 'Home'},
    {id: 3, label: 'Travel'},
    {id: 4, label: 'Workout'}
  ]

  $scope.categorySettings = {displayProp: 'label', idProp: 'label'};


  $scope.editEntry = function(){
    console.log($scope.entries);
    $scope.entry = $scope.entries[this.$index];
    index = this.$index;
  }

  $scope.postEntry = function(entry){
    // check if entry is already in the array
    entry.categories = $scope.selectedCategories;

    console.log(entry)
    if(index === -1){
      // $scope.entries.push(entry);
      entry.comments = [];
      fbEntries.push(entry);
    } else {
      $scope.entries[index] = entry;
      $scope.entries.$save(index);
      index = -1;
    }
    $scope.selectedCategories = [];
    $scope.entry = "";
  }

  $scope.removeComment = function(){
    $scope.entries[index].comments.splice(this.$index, 1);
    $scope.entries.$save(this.$index);
  }

  $scope.pickImg = function fileUpload( new_img ){
    filepicker.setKey("AOyREerJIT8iQwL6JX9cWz");

    filepicker.pick(
      {
        mimetypes: ['image/*', 'text/plain'],
        container: 'window',
        services:['COMPUTER'],
      },
      function(Blob){
        imageUpped = Blob.url;
        $scope.img = imageUpped;
        $scope.entry.img = imageUpped;
        console.log(imageUpped);
      },
      function(FPError){
        console.log(FPError.toString());
      }
    );
  }
})