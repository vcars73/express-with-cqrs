const express = require('express');
const userHandler = require('../modules/user/apiHandler/apiHandler')
const router = express.Router();
const jwt = require('../config/auth/jwt')

router.post('/login',userHandler.login)
router.post('/register',userHandler.register );
router.get('/getalluser',jwt.verifyToken,userHandler.getAlUser)

module.exports = router;
