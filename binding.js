// dibawah ini adalah salah satu cara untuk menggunakan filter jika kita ingin membuat banyak objek vuejs
// Vue.filters('currencyFormat', function () {
	
// })
// component vue, berbeda dengan vue object utama pada component lebih seperti template dan dapat dipakai berulang-ulang
Vue.component('price', {
	data : function () {
		// prefix: 'Rp', precision: 2,
		return {  };
	},
	props: ['value','prefix','precision'],
	template : '<span> {{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }} </span>',
})

var app = new Vue({
	el: '#app',
	data: {
		maximum : 50,
		products : null,
		cart: [],
        style: {
            label : ['font-weight', 'mr-2'],
            inputWidth: 60,
            sliderStatus: false,
        },
	},
	// mengambil data api dan ditampilkan
	// event mount adalah event yang ketika komponen dan template sudah siap digunakan atau dirender
	mounted: function() {
		fetch('https://hplussport.com/api/products/order/price')
		.then(response => response.json())
		.then(data => { this.products = data })

	},
	filters: {
		currencyFormat: function (value) {
			return 'Rp. ' + Number.parseFloat(value).toFixed(2);
		}
	},
    computed: {
        sliderState : function () {
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        },
		// membuat total rupiah keranjang
		cartTotal : function () {
			let sum = 0;
			for (key in this.cart) {
				sum = sum + (this.cart[key].product.price * this.cart[key].qty);
			}
			return sum;
		},
		// membuat total jumal keranjang
		cartQty : function () {
			let qty = 0;
			for (key in this.cart) {
				qty = qty + this.cart[key].qty;
			}
			return qty;
		}
    },
	methods: {
		// add to cart dalam vue js
		addItem: function (product) {
			// this.cart.push(product); menambah data dalam bentuk array ke cart
			var productIndex; //ini untuk key unik yang diambil dari perulangan
			var productExist = this.cart.filter(function (item, index) {
				if ( item.product.id == Number(product.id) ) {
					productIndex = index;
					return true;
				} else {
					return false;
				}
			});

			// untuk menampilkan qty dan product
			if (productExist.length) {
				this.cart[productIndex].qty++
			} else {
				this.cart.push({product : product, qty: 1});
			}
		},
		// delete item product keranjang
		deleteItem: function (key) {
			if (this.cart[key].qty > 1) {
				this.cart[key].qty--;
			} else {
				this.cart.splice(key, 1);
			}
		},
		before : function (el) {
			// ketika even method dijalankan maka function dapat mengambil data yang ada dalam tag ketika aksi dijalankan
			el.className = 'd-none';
		},
		enter : function (el) {
			var delay = el.dataset.index * 100;

			// dalam vue js, style dapat diatur dalam penulisan vue code itu sendiri
			setTimeout(function() {
				el.className = 'row d-flex mb-3 align-items-center animate__animated  animate__fadeInRight';
			}, delay);
		}, 
		leave : function (el) {
			var delay = el.dataset.index * 100;
			setTimeout(function() {
				el.className = 'row d-flex mb-3 align-items-center animate__animated  animate__fadeOutRight';
			}, delay);
		}
	}
})