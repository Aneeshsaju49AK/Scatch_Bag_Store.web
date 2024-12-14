const express = require("express");
const router = express.Router();


router.get("/" ,function(req,res){
  res.send("router product is working");
})

module.exports = router;

