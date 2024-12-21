const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let owner = await ownerModel.find();
        if (owner.length > 0) {
            return res.status(504).send("You don't have permission to crate a new owner");
        }
        let { fullname, email, password } = req.body;
        let createdOwner =  await ownerModel.create({
            fullname,
            email,
            password,

        });
        res.status(201).send(createdOwner);
    });
}

router.get("/", function (req, res) {
    res.render("index");
    res.send("router owner is working");
});




module.exports = router;

