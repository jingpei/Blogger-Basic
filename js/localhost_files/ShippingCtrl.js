app.controller('ShippingCtrl', function($scope, $state, UserFactory, ShoppingCart){
  $scope.user = UserFactory.info;
  $scope.user.shipMethod = UserFactory.info.shipMethod || {type: 'USPS (3-5 BUSINESS DAYS): FREE', value: 0}
  $scope.card = UserFactory.cardInfo;
  $scope.order = UserFactory.generateOrderNumber();
  ShoppingCart.calculateTotals();
  $scope.items = ShoppingCart.items;
  $scope.total = ShoppingCart.total;
  $scope.state = $state.current.name;
  console.log($scope.state);

  $scope.changeQty = function(qty){
    $scope.items[this.$index].qty += qty;
    ShoppingCart.calculateTotals();
    if($scope.items[this.$index].qty === 0){
      $scope.items.splice(this.$index, 1);
    }
  }

  $scope.addCC = function(){
    $state.go('billing');
    console.log('something bill')
  }

  $scope.parseFloat = function(value){
    return parseFloat(value);
  }

  $scope.toFixed = function(value){
    return value.toFixed(2);
  }

  $scope.completeOrder = function(){
    $state.go('orderSummary');
    console.log('something fsdf')
  }

})