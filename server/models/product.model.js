const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'product name can\'t be empty'
    },
    category: {
        type: String,
        required: 'Category can\'t be empty',
    },
    price: {
        type: Number,
        required: 'price can\'t be empty',
    },
    discount: {
        type: String
    },
    deliveryCharge: {
        type: Number,
        default: 200
    },
    offerPrice: Number,
    rating: Number,
    imgUrl :{
        type: String,
        default: "/assets/img/laptop.jpg"
    }
});

mongoose.model('Product', productSchema);