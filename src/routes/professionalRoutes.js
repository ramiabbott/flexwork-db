const { Router } = require("express");
const { Professional } = require("../app/db.js");
const router = Router();



router.get("/", async(req, res) => {
    await Professional.findAll()
      .then((professionals) => {
        res.json(professionals);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.post("/create", async(req, res) => { 
    await Professional.create(req.body)
      .then((professional) => {
        res.json(professional);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  


module.exports = router;