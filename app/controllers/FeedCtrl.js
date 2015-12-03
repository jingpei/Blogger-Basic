app.controller('FeedCtrl', function($scope, Content){
  $scope.entries = Content.entries;
})