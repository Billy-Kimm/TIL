const { Movie, validate } = require('../models/movie');
const {genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('name');
  res.send(movies);
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.message);

  const genre = await genre.findById(req.body.genreId);
  if(!genre) return res.status(400).send('bad request');

  let movie = new Movie({ 
      title: req.body.title,
      mainActor: req.body.mainActor,
      genre: {
          _id: genre_id,
          name: genre.name
      }
    });
  movie = await movie.save();
  res.send(movie);
})

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if(!movie) return res.status(404).send('The genre with the given ID was not found');
  res.send(movie);
});

router.patch('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const movie = await Movie.findByIdAndUpdate(req.params.id, {
    ntitle: req.body.title,
    mainActor: req.body.mainActor
  }, { new: true })

  res.send(movie);
})

router.delete('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);

  if(!movie) return res.status(404).send('The genre with the given ID was not found');

  res.send(movie);
});

module.exports = router;