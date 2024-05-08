const { default: mongoose } = require("mongoose");
const Post = require("../models/post")
const asyncHandler = require("express-async-handler");


exports.getPosts = asyncHandler(async (req,res)=>{
    const posts = await Post.find().exec()
    res.json({posts:posts})
})

exports.addTestPost = asyncHandler(async (req,res)=>{
    const post = new Post({username:"lucho1",likes: 100, body:"algo de algo"})
    await post.save() 
    res.end()
})