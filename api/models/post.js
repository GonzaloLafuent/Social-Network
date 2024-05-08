const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author:{type: Schema.Types.ObjectId,required:true},
    body: {type:String,requiered:true},
    likes:{type:Number,required:true},
    comments:[{type:String}]
})

module.exports = mongoose.model("Post",PostSchema)