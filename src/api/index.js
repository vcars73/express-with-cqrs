const express = require('express');
const userRoutes = require('./user')
const router = express.Router();

router.use('/user', userRoutes);

  router.get("/", (req, res) => {
    res.send("hello fikar");
   });


module.exports = router