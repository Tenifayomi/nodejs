const mongoose = require('mongoose') //OR import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    Fullname:{
        type:String,
        required:[true, 'Fullname is required']
    },
    Email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minLength:[8, 'Password must not be less than 8 characters'],
        //match:[/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password  must have minimum eight characters, at least one letter, one number and one special character']
    }
},
{
    timestamps:true
})
const User = mongoose.model("user", userSchema)

module.exports = User