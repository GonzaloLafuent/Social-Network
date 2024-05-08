var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/posts',(req, res) =>{
    res.send("aca te mando los post")
});

router.get("/chats",(req,res)=>{
    res.send("aca te mando los chats")
})

router.post("/posts/id",(req,res)=>{
    res.json("djskjdskjsdk")
})

module.exports = router;