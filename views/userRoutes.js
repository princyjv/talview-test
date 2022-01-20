const express = require("express");
const router = express.Router();
const userSchema = require("../model/userModel")

const { surveyForm} = require("../controllers/controllers");


router.post("/survey" , surveyForm) //post the survey data in db
router.get("/getsurvey" , (req,res)=>{//get the survey data from db
userSchema.find({}, (err,user) =>{
    if(err){
        res.json(err)
    }
    else{
        res.json(user)
    }
})

})
module.exports = router
