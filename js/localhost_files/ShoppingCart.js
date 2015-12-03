app.factory('ShoppingCart', function(){
  return {
    total: {
      discount: 0,
      subtotal: 0,
      tax: 0
    },
    items: [
      {model: 'PEBBLE TIME', color: 'WHITE', shipTime: 'SHIPS NEXT BUSINESS DAY', price: 199.99, qty: 1, assetUrl: './assets/white_pebble_time.png'},
      {model: 'PEBBLE TIME ROUND', color: 'ROSE GOLD WHITE', shipTime: 'SHIPS NEXT BUSINESS DAY', price: 249.99, qty: 1, assetUrl: './assets/white_pebble_time_round.png'},
      {model: 'PEBBLE TIME ROUND', color: 'ROSE GOLD', shipTime: 'SHIPS NEXT BUSINESS DAY', price: 249.99, qty: 1, assetUrl: './assets/gold_pebble_time_round.png'}
    ],
    discountRate: 0.10,
    taxRate: 0.0925,
    calculateTotals: function(){
      var subtotal = 0;
      this.items.forEach(function(item){
        subtotal += (item.price * item.qty);
      })
      this.total.subtotal = subtotal.toFixed(2);
      this.total.discount = (this.discountRate * this.total.subtotal).toFixed(2);
      this.total.tax = (this.taxRate * subtotal).toFixed(2);
    }
  }
})