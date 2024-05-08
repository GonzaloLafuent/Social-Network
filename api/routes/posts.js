const express = require("express")
const router = express.Router();
const postController = require("../controllers/postController")

router.get("/",postController.getPosts)

router.get("/add-test", postController.addTestPost)

router.get("/id",(req,res)=>{

})

router.post("/createPost/user",(req,res)=>{

})

router.delete("/deletePost/user",(req,res)=>{

})


module.exports = router