const mongoose = require("mongoose")
const User = require("../models/user")
const asyncHandler = require("express-async-handler");
const { exists } = require("../models/post");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const SECRET = "ilbouthapepewhijkargtherace"

const createToken = (_id,first_name,username) =>{
    return jwt.sign({_id,first_name,username},SECRET,{expiresIn:"3d"}) 
} 

//SignUp controller
//Nota: podemos hacer la validacion de datos desde aca antes de enviar el usuario, se puede hacer con la liberai de validator
exports.signUpUser = asyncHandler( async (req,res) => {
    
    const {first_name,last_name,username,data_of_birth,password} = req.body
    console.log(req.body)

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt) 
    //Chequeamos si el usuario ya existe
    const exists = await User.findOne({username}).exec()
    
    if(exists!=null)
        res.status(400).json({sign_user:false, msg:"user already exists"})
    else{
        const user = new User({
            first_name,
            last_name,
            username,
            data_of_birth,
            password: hashPassword,
            posts:[],
            friends:[],
            liked_posts:[]
        })

        await user.save()

        res.status(200).json({sign_user:true,msg:"User register correctly"})
    }   
})

//logIn controller
exports.logInUser = asyncHandler( async(req,res)=>{
    const {username,password} = req.body

    const user = await User.findOne({username}).exec()

    if(!user) res.status(400).json({msg:"Incorrect username"})

    const match = await bcrypt.compare(password,user.password)

    console.log(match)

    if(!match) res.status(400).json({msg:"Incorrect password"})

    const token = createToken(user._id,user.first_name,user.username)
    res.status(200).json({firs_name:user.first_name,username:user.username,token})
} )