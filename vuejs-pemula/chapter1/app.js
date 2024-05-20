var data = {
  maximum: 50,
  products: null,
  cart: [],
};

var app = new Vue({
  el: "#app",
  data: data,
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    addItem: function (product) {
      cart.push(product);
    },
  },
});
