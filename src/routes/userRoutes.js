const { Router } = require("express");
const router = Router();
const { User } = require("../app/db.js");

router.get("/", async(req, res) => {
  await User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/create", async(req, res) => { 
  await User.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
