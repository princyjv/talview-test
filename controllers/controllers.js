
const asyncHandler = require("express-async-handler");
const userInfo = require('../model/userModel');
const handleDuplicateField = (err) => {
    let message;
    const keys = Object.keys(err.keyValue);
    if (keys.includes('email')) message = 'User already exists';
    return message;
  }

  const handleCastError = (err) => {
    const message = `Invalid ${err.errors.path}: ${err.errors.value}.`;
    return message;
  }
  
  const handleValidationError = (err) => {
    let message;
    const key = Object.keys(err.errors);
    message = `Invalid ${err.errors[key[0]].path}: ${err.errors[key[0]].value}.`;
    if (err.errors[key[0]] && err.errors[key[0]].properties) {
      message = err.errors[key[0]].properties.message;
    }
    return message;
  }
  
  const surveyForm = asyncHandler(async (req, res) => {
   

try {
    
    const newUser = await userInfo.create({
        name: req.body.name,
      email: req.body.email,
     age: req.body.age,
     currentRole: req.body.currentRole,
     recommend: req.body.recommend,
     improved: req.body.improved,
     comments: req.body.comments, 

    });

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: newUser,
    });
  } catch (err) {
    let message = 'something went wrong';
    if (err.code === 11000) message = handleDuplicateField(err);
    if (err.firstName === 'ValidationError'|| err.lastName === 'ValidationError'||err.contactNumber === 'ValidationError'  ) message = handleValidationError(err);
    if (err.firstName === 'CastError'|| err.lastName === 'CastError'||err.contactNumber === 'CastError') message = handleCastError(err);
    return res.status(400).json({
      success: false,
      message: message,
    });
  }
})

module.exports = {surveyForm}
