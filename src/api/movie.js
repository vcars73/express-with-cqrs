const express = require('express');
const moviesHandler = require('../modules/movies/apiHandler/apiHandler')
const router = express.Router();
const jwt = require('../config/auth/jwt')

router.get('/',moviesHandler.listMovies)
router.get('/:id',moviesHandler.detailMovies)

module.exports = router;
