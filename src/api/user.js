const express = require('express');
const router = express.Router();

router.post("/register", (req, res) => {
    res.send(`nama saya ${req.body.nama}`);
   });

module.exports = router;
