const express = require('express');
const Joi = require('joi'); // class를 return 한다.
const app = express();

// Json parsing을 위한 함수
app.use(express.json());

// 임시 DB
const movies = [{
        id: 1,
        title: 'dark night'
    },
    {
        id: 2,
        title: 'money ball'
    },
    {
        id: 3,
        title: 'river runs through it'
    },
];

app.get('/', (req, res) => {
    res.send('happy hacking');
});

app.get('/:name', (req, res) => {
    res.send(`HI ${req.params.name}`);
});

// CRUD
// create read update destroy
// post   get   put    delete

// GET /api/movies 모두
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

// GET api/movies/1
app.get('/api/movies/:id', (req, res) => {
    const movie = getMovie(movies, parseInt(req.params.id));
    if (!movie) {
        res.status(404).send(`movie with given id ${req.params.id} not found`);
    }
    res.send(movie);
});

// // POST api/movies/
app.post('/api/movies', (req, res) => {
    const schema = {
        // title은 string타입에 최소 2글자에 꼭 있어야한다.
        title: Joi.string().min(2).required(),

    }
    // 유효성 검사 Joi를 설치후 require로 가져온후..
    // 검사할때 표준을 body , schema로 하겠다.
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.send(result.error.details[0].message);

    const movie = {
        id: movies.length + 1,
        title: req.body.title,
    };

    movies.push(movie);
    res.send(movie);
});

// // PUT api/movies/1
app.put('/api/movies/:id', (req, res) => {

    // movie에서 id를 찾는다. 없으면 404
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send(`the movie with the given id ${req.params.id} was not found`)

    const { error } = validateMovie(req.body);
    // const result = validateMovie(req, body);

    if (error) return res.status(400).send(error.message);

    // GOOD! UPDATE! 업데이트한 movie를 리턴한다.
    movie.title = req.body.title;
    // 업데이트한 무비 send
    res.send(movie);

});

// // DELETE api/movies/1
app.delete('/api/movies/:id', (req, res) => {
    // movies에서 id로 찾기
    const movie = movies.find((movie) => movie.id === parseInt(req.params.id));

    // 없으면 404
    if (!movie) return res.status(404).send(`the movie with the given id ${req.params.id} was not found`)

    // delete logic 수행
    const index = movies.indexOf(movie);
    movies.splice(index, 1);

    // 삭제된 data send 
    res.send(movie);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(2).required(),
    };
    return Joi.validate(movie, schema);
}

function getMovie(movies, id) {
    const movie = movies.find(movie => movie.id === id);
    return movie
}