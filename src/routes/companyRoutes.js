const express = require('express');
const router = express.Router();
const { Company } = require('../app/db.js');

router.get('/', async (req, res) => {
    await Company.findAll()
        .then(companies => {
            res.json(companies);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/create', async (req, res) => {
    await Company.create(req.body)
        .then(company => {
            res.json(company);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router