const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();


router.get("/", function (req, res) {
    res.render("index");
  });

router.get("/shop", isLoggedIn, function(req,res){
 res.render("shop")
});


module.exports = router;