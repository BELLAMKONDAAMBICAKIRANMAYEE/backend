const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    productName:String,
    productPrice:String,
    productDescription:String,
    productImage:String
})

const Product=mongoose.model("product",productSchema)
module.exports=Product