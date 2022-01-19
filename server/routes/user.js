const express = require('express');

const router = express.Router();

const {signup} = require("../api/signup");

const {signin} = require("../api/signin");

router.post('/signup' , signup); //POST request to register the user

router.post('/signin' , signin); // POST request to login the user

module.exports = router;