app.controller('FeedCtrl', function($scope, Content, FIREBASE_URL, $location, $firebaseArray, $firebaseObject){
  // Initialize Firebase Objects
  var db = new Firebase(FIREBASE_URL);
  var fbEntries = db.child('entries');
  $scope.entries = $firebaseArray(new Firebase('https://trove-blog.firebaseio.com/entries'));
  
  // Load from factory
  $scope.entry = Content.entry;
  var index = Content.index;

  $scope.getIndex = function(){
    index = Content.updateIndex(this.$index);
    $scope.entry = Content.updateEntry($scope.entries[this.$index]);
    $location.path('/entry/' + $scope.entries[this.$index]['$id']);
  }

  $scope.addComment = function(comment){
    if(!$scope.entries[index].comments){
      // Update current entry
      $scope.entry.comments = [{name: comment.name, text: comment.text}];
      
      // Update entries array in the db
      $scope.entries[index].comments = [{name: comment.name, text: comment.text}];
      $scope.entries.$save(index);
      console.log($scope.entries[index])
    } else {
      $scope.entry.comments.unshift(comment)
      $scope.entries[index].comments.unshift(comment);
      $scope.entries.$save(index);
      console.log($scope.entries[index])

    }
    $scope.comment = {};
  }

})