// middlesware
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const Joi = require('joi');
const express = require('express');
const app = express();

//console.log(`Node_env: ${process.env.NODE_ENV}`);

// middleware 우선순위는 위부터 차례대로

console.log(app.get('env'));
console.log(app.get('debug'));

// Helps secure your apps by setting various HTTP headers.
app.use(helmet());
// 설정한 NODE_ENV 가져온다.
if(app.get('env') === 'development'){
    // debug middleware 사용
    debug('MORGAN을 실행합니다.');
    // HTTP request logger.	'dev'환경에서만 쓰겠다란 의미. common, theme 등..
    app.use(morgan('dev'));
}

// config의 json의 내용 출력
//console.log(config.get('DB').password);
//console.log(config.get('DB.password'));

// express 내장함수
app.use(express.json());
// json parsing후에 users?!key~~~~~ 를 object로 바꿔주는 역할
app.use(express.urlencoded({ extended: true }));
// public 폴더에서 static 파일을 사용 url은 root후 바로 public 폴더이름으로함.
app.use(express.static('public'));

app.use(logger);
app.use(auth);

const movies = [
  { id: 1, title: 'Bohemian Rhapsody' },
  { id: 2, title: 'Matrix' },
  { id: 3, title: 'Edge of Tommorow' },
];

app.get('/', (req, res) => {
  res.send('Happy Hacking');
});

app.get('/:name', (req, res) => {
  res.send(`Hi, ${req.params.name}`);
});


/* GET /api/movies */
app.get('/api/movies', (req, res) => {
  res.send(movies);
});

/* GET /api/movies/1 */
app.get('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) res.status(404).send(`Movie with given id(${req.params.id}) is not found.`);
  res.send(movie);
});

/* POST /api/movies */
app.post('/api/movies', (req, res) => {
  const { error } = validateMovie(req.body)

  if (error) return res.status(400).send(error.message);
  
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  };

  movies.push(movie);
  res.send(movie);
});

/* PUT /api/movies/1 */
app.put('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);
  
  const { error } = validateMovie(req.body)
  // const error = validateMovie(req.body).error;

  if (error) return res.status(400).send(error.message);

  movie.title = req.body.title;
  res.send(movie);
});

/* DELETE /api/movies/1 */
app.delete('/api/movies/:id', (req, res) => {
  const movie = getMovie(movies, parseInt(req.params.id));
  if (!movie) return res.status(404).send(`The movie with the given ID(${req.params.id}) was not found`);

  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  res.send(movie);
});

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).required(),
  }
  return Joi.validate(movie, schema);
}

function getMovie(movies, id){
  return movies.find(movie => movie.id === id)
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));