const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req, res);
  res.sendFile(path.join(__dirname, '../public', "index.html"));
});

module.exports = router;
