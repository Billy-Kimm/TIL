const genres = require('./routes/genres');
const movies = require('./routes/movies');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// DB connection
mongoose.connect('mongodb://localhost/video-api', {useNewUrlParser:true})
    .then(()=> console.log('connected MongoDB'))
    .catch(error => console.error(error.message));

// middlewares
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/movies', movies);

// models 
// model folder -> genre.js

// routes
// routes folder -> genres.js

// server run
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));