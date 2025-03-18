const express = require('express');
const userRegister = require('../controllers/users/register.controllers');
const userLogin = require('../controllers/users/login.controllers');
const userRouter = express.Router()

userRouter.post('/register',userRegister)
userRouter.post('/login',userLogin)

module.exports = userRouter