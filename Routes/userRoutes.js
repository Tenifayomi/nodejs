const express = require('express')
 const router = express.Router()

 const{registerUser, loginUser} = require('../Controllers/userController.js')
const { upload } = require('../Utilities/fileuploads.js')

 router.post('/register',upload.single("image"), registerUser)
 router.post('/login', loginUser)


 module.exports = router