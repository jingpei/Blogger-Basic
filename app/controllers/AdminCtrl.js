app.controller('AdminCtrl', function($scope, Content){
  $scope.entries = Content.entries;
  $scope.selectedCategories = [];
  var index = -1;
  $scope.categories = [
    {id: 1, label: 'Style'},
    {id: 1, label: 'Home'},
    {id: 1, label: 'Travel'},
    {id: 1, label: 'Workout'}
  ]

  $scope.editEntry = function(){
    $scope.entry = $scope.entries[this.$index];
    index = this.$index;
  }

  $scope.postEntry = function(entry){
    // check if entry is already in the array
    console.log(entry);
    if(index === -1){
      $scope.entries.push(entry);
    } else {
      $scope.entries[index] = entry;
      index = -1;
    }
    $scope.entry = "";
  }
})