const productModel = require('../Models/Product')
const User = require('../Models/User')

const createProduct = async(req, res)=>{
    // used to have access to what we have on the postman form on the terminal (console.log(req.body);)
const {name, price, color} = req.body
try {

// validation
if(!name || !price || !color){
   return res.status(400).json("Fields cannot be empty")
}

const createdProduct = await productModel.create({
    name:name,
    price:price,
    color:color
})

if(createdProduct){
    const {name,price,color} = createdProduct
   return res.status(201).json({ 
        name,
        price,
        color
})
}else{
   return res.status(400).json("An error occured")
}
}catch(error){
    return(
        res.status(500).json(error.message)
    )
}

res.send('create product controller')
}

 // get all product controller

 const getAllProduct = async(req, res)=>{
    
    try {
        const products = await productModel.find({}) 
        
       return res.status(200).json(products)
    } catch (error) {
       return res.status(500).json(error.message)
    }
 }

const deleteSingleProduct = async(req, res)=>{
    const {id} = req.params
   
     try {
        const deletedProduct = await productModel.findByIdAndDelete(id)
       return res.status(200).json('Product successfully deleted')
     } catch (error) {
       return res.status(500).json(error.message)
     }
}

//get single product

const getSingleProduct= async(req, res)=>{
    const {id} = req.params

    try {
        const singleProduct = await productModel.findById(id) //OR findOne({ _id: id })
      return res.status(200).json(singleProduct)
        
    } catch (error) {
       return res.status(500).json(error.message)
        
    }
}

//update product
const updateProduct = async(req, res)=>{
const {id} = req.params

try {
    const updatedProduct = await productModel.findByIdAndUpdate(
        {_id:id},
        req.body,
        {
            runValidators:true,
            new:true
        }
        
    )
    return res.status(200).json(updatedProduct)
    
} catch (error) {
   return res.status(500).json(error.message)
    
}
 }

 const getOneUser = async(req,res) => {

    const{id} = req.params
    console.log(id);
    try {
    const UserFound = await User.findById(id)
    if(UserFound){
        console.log(UserFound);
      return res.status(200).json(UserFound)
    }
    else{
        return res.status(400).json('user not found')
    }
      
  } catch (error) {
      return res.status(500).json(error.message)
      
  }
 }
module.exports = {createProduct, getAllProduct, deleteSingleProduct, getSingleProduct, updateProduct,getOneUser}








