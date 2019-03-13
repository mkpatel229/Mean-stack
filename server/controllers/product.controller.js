const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports.addProduct = (req,res,next) => {

    var product = new Product()
    product.productName = req.body.productName
    product.category = req.body.category
    product.price = req.body.price
    product.discount = req.body.discount
    product.deliveryCharge = req.body.deliveryCharge
    product.offerPrice = req.body.offerPrice
    product.rating = req.body.rating
    product.imgUrl = req.body.imgUrl

    product.save((err, doc) => {
        if(!err){
            res.send(doc)
        }
        else{
            return next(err)
        }
    });

}

module.exports.getProduct = (req,res,next) => {
    Product.findOne({_id:req.params._id}, (err, prod) => {
        if(!prod){
            return res.status(404).json({ status: false, message: 'User record not found.' })
        }
        else {
            return res.status(200).json({ status: true, prod });
        }
    })
}

module.exports.getAllProduct = (req,res,next) => {
    Product.find({}, (err, prod) => {
        if(!prod){
            return res.status(404).json({ status: false, message: 'User record not found.' })
        }
        else {
            return res.status(200).json({ status: true, prod });
        }
    })
}