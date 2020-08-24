const express = require('express');
const userHandler = require('../modules/user/apiHandler/apiHandler')
const router = express.Router();

router.post('/register',userHandler.register );
router.get('/getalluser',userHandler.getAlUser)

module.exports = router;
