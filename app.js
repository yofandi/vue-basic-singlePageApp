// var dat = {
// 	maximum : 200000,
// 	products: [
// 		{
// 			"nameProduct": "Miniatur kayu",
// 			"descProduct": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus? Placeat at repudiandae veritatis et esse? Et nihil ut repellendus consequatur in, ipsa asperiores, odit numquam nemo corporis blanditiis natus!",
// 			"priceProduct": "177000",
// 			"imageProduct": "https://bangkatengahkab.go.id/asset/foto_statis/Miniatur_Bambu.jpg"
// 		},
// 		{
// 			"nameProduct": "Narnia Series",
// 			"descProduct": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus? Placeat at repudiandae veritatis et esse? Et nihil ut repellendus consequatur in, ipsa asperiores, odit numquam nemo corporis blanditiis natus!",
// 			"priceProduct": "199000",
// 			"imageProduct": "https://cf.shopee.co.id/file/4f5b01ea7052df92d40279e8f234d321"
// 		},
// 		{
// 			"nameProduct": "Gundam Barbatos",
// 			"descProduct": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, natus? Placeat at repudiandae veritatis et esse? Et nihil ut repellendus consequatur in, ipsa asperiores, odit numquam nemo corporis blanditiis natus!",
// 			"priceProduct": "2500000",
// 			"imageProduct": "https://i.pinimg.com/originals/ff/25/2f/ff252fe544fa1620557afc95ea06b46d.jpg"
// 		},
// 	]
// }

var app = new Vue({
	el: '#app',
	data: {
		maximum : 50,
		products : null,
		cart : [],
	},
	// mengambil data api dan ditampilkan
	// event mount adalah event yang ketika komponen dan template sudah siap digunakan atau dirender
	mounted: function() {
		fetch('https://hplussport.com/api/products/order/price')
		.then(response => response.json())
		.then(data => { this.products = data })

	},
	methods: {
		addItem: function (product) {
			this.cart.push(product);
		}
	}
})