const express = require('express');
const router = express.Router();
const Joi = require('joi');

router.get('/', (req, res) => {
    res.render('index',{
        title: 'Happy hacking',
        greeting: 'may you have happy hacking'
    })
});

router.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});

module.exports = router;