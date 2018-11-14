const Joi = require('joi');
const mongoose = require('mongoose');
const { genreSchema } = require('./genre');

const movieShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    release:{
        type: Date,
        default:Date.now()
    },
    mainActor: {
        type:String,
        minlength: 1,
    },
    genre: {
        type: genreSchema,
        require: true
    }
});

const Movie = mongoose.model('Movie', movieShema);

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(5).max(255),
        release: Joi.date(),
        mainActor: Joi.string().min(1),
        genreId: Joi.string.required()
    }
    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
