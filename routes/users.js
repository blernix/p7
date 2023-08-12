const express = require('express');

const router = express.Router();

const User = require('../models/User');

const userCtrl = require('../controllers/user');

// const bcrypt = require ('bcrypt');

// const jwt = require('jsonwebtoken');

router.post('/signup',userCtrl.signup );

router.post('/login', userCtrl.login );


module.exports = router; 