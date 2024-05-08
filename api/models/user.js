const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { 
    type: String, 
    required: true, 
    maxLength: 100 
  },
  last_name: { 
    type: String, 
    required: true, 
    maxLength: 100 
  },
  username: {
    type: String, 
    required:true,
    unique:true, 
    maxLength: 100
  },
  date_of_birth: { 
    type: Date 
  },
  password: {
    type: String,
    required: true
  },
  posts:[{
    type: Schema.Types.ObjectId
  }],
  friends:[{
    type: Schema.Types.ObjectId
  }],
  liked_posts: [{
    type: Schema.Types.ObjectId
  }]
});

module.exports = mongoose.model("User", UserSchema);