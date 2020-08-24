const express = require('express');
const {pool} = require('../config/db/postgre')
const router = express.Router();
const userRoutes = require('./user');
const logger = require('../config/logger');


router.use('/user', userRoutes);

  router.get("/", (req, res) => {
    res.json("hello fikar");
   });



module.exports = router