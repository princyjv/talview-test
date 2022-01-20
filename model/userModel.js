const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        cast: false,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true,
        cast: false,
        validate: {
          validator(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              return true;
            }
            return false;
          },
          message: 'Please enter valid email',
        },
      },
      age: {
        type: Number,
        cast: false,
        required: [true, 'Please enter your age'],
      },
      currentRole:{
        type: String,
        cast: false,
        required: [true, 'Please select your current role'], 
      },
      recommend:{
        type: String,
        cast: false,
        required: [true, 'Please selcect the option for recommendation'], 
      },
    improved:{
        type: String,
        cast: false,
        required: [true, 'Please select the option']
      },
    comments:{
        type: String,
        cast: false,
        required: [true, 'Please fill the area'] 
      }
    },
    
   {
     timestamps: true,
   }
);




 const userInfo= mongoose.model("userInfo" , userSchema )
 module.exports = userInfo;