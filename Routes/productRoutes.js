const express = require('express')
const router = express.Router()
const {createProduct, getAllProduct, deleteSingleProduct, getSingleProduct, updateProduct, getOneUser} = require('../Controllers/productController')

router.post('/create', createProduct)
router.get('/getall', getAllProduct)
router.delete('/delete/:id', deleteSingleProduct)
router.get('/getone/:id', getSingleProduct)
router.patch('/update/:id', updateProduct)
router.get('/getonex/:id', getOneUser)



module.exports = router



// const express = require('express')
// const router = express.Router()
// const createProduct = require('../Controllers/productController')
// router.get('/create', (req, res)=>{
// res.send('Create route Activated')
// })

// module.exports = router