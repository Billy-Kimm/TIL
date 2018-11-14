const { Movie, validate } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await Movie.find().sort('name');
  res.send(genres);
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.message);

  let genre = new Movie({ name: req.body.name });
  genre = await genre.save();

  res.send(genre);
})

router.get('/:id', async (req, res) => {
  const genre = await Movie.findById(req.params.id);
  if(!genre) return res.status(404).send('The genre with the given ID was not found');
  res.send(genre);
});

router.patch('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Movie.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  }, { new: true })

  res.send(genre);
})

router.delete('/:id', async (req, res) => {
  const genre = await Movie.findByIdAndDelete(req.params.id);

  if(!genre) return res.status(404).send('The genre with the given ID was not found');

  res.send(genre);
});

module.exports = router;