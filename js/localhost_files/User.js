app.factory('UserFactory', function($state){
  return {
    info: {},
    cardInfo: {},
    orderInfo: {},
    generateOrderNumber: function(){    
      var orderNumber = "";
      for(var i = 0; i < 10; i++){
        orderNumber += Math.ceil(Math.random()*i);
      }
      return orderNumber;
    }
  }
})