const Joi = require('joi');
const mongoose = require('mongoose');

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
    }
});

const Movie = mongoose.model('Movie', movieShema);

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(5).max(255).required(),
        release: Joi.date(),
        mainActor: Joi.string().min(1)
    }
}

exports.Movie = Movie;
exports.validate = validateMovie;
