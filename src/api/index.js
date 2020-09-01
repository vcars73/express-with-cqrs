const express = require('express');
const router = express.Router();
const userRoutes = require('./user');



router.use('/user', userRoutes);

  router.get("/", (req, res) => {
    res.json("hello fikar");
   });



module.exports = router