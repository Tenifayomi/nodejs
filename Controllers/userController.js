const User = require('../Models/User')
const Bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken');
const sendMail = require('../Utilities/email') 
const expressHandler = require('express-async-handler')


const generateToken = (id) => {
    // id, private key, (options) 
     return JWT.sign({userId: id},process.env.JWT_SECRET,{expiresIn:'1h'})
}

// const generateResetToken = (id)=>{
//     return JWT.sign({userId: id}, process.env.RESET_TOKEN, {expiresIn:'2h'} )
// }
// Registration

const registerUser = async(req, res) => {
    const {Fullname, Email, password, Confirmpassword} = req.body
    try {
        // Validation
        if(!Fullname || !Email || !password || !Confirmpassword){
            return res.status(400).json('All fields must be filled')
        }
        if(password.length < 8){
            return res.status(400).json('Password must not be less than 8 characters')
        }
        if(password !==Confirmpassword){
            return res.status(400).json('Password does not match confirm password')
        }
// hashing of password

const salt = Bcrypt.genSaltSync(10)
const hashedPassword = Bcrypt.hashSync(password, salt)


        const emailExists = await User.findOne({Email})
        if(emailExists){
            return res.status(400).json('User already exists')
        }
            // Create User
        const createdUser = await User.create({
            Fullname:Fullname,
            Email:Email,
            password:hashedPassword
        })
        sendMail()
         const token = generateToken(createdUser._id)

        //  res.cookie("token", token, {
        //     path:'/',
        //     httponly: true,
        //     expires: new Date(Date.now() + 1000 * 24),
        //     sameSite: "none",
        //     secure:true
        //  })
        if(createdUser){
            const {Fullname, Email, password} = createdUser
            return res.status(200).json({
                Fullname, Email, password,token
            })
        }


    } catch (error) {
       return res.status(500).json(error.message)
    }
}

//Login user 

const loginUser = async (req, res) => {
    const{Email, password} = req.body

    try {
        if(!Email || !password){
            return res.status(400).json('Field cannot be empty')
        }

        // check if email does not exist
        const userExist = await User.findOne({Email})
        if(!userExist){
            return res.status(400).json('User does not have an account, please register')
        }

        // check if password is correct
        const correctPassword = Bcrypt.compareSync(password, userExist.password)
        

        if(userExist && correctPassword){
            const{_id, Email, Fullname} = userExist
            const Token = generateToken(_id)
            return res.status(200).json(
                _id, Email, Fullname, Token
            )

 }        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

 
// Get one user


//  try {
//     const UserFound = await User.findById(id)
//     if(UserFound){
//         console.log(UserFound);
//       return res.status(200).json(UserFound)
//     }
//     else{
//         return res.status(400).json('user not found')
//     }
      
//   } catch (error) {
//       return res.status(500).json(error.message)
      
//   }
    // }

  


 

module.exports = {registerUser, loginUser,}