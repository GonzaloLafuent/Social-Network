const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController.js")

//SignUp route
router.post("/signup",userController.signUpUser)

//LogIn route
router.post("/login",userController.logInUser)

module.exports = router