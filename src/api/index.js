const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const moviesRoutes = require('./movie')



router.use('/user', userRoutes);
router.use('/api/movies',moviesRoutes);
  router.get("/", (req, res) => {
    res.json("hello fikar");
   });



module.exports = router