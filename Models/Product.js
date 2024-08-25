const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },

    price:{
        type:String,
        required:[true, 'Price is required']
    },

    color:{
        type:String,
        required:[true, 'Color is required'],
        default:"As seen in the picture"
    }
})

const productModel = mongoose.model("product", productSchema)


module.exports = productModel