const express = require('express');
const userHandler = require('../modules/user/apiHandler/apiHandler')
const router = express.Router();

router.post('/register',userHandler.register )

module.exports = router;
