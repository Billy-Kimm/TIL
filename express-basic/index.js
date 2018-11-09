const express = require('express');
const app = express();

// 임시 DB
const movies = [
    {id:1, title:'dark night'},
    {id:2, title:'money ball'},
    {id:3, title:'river runs through it'},
];

app.get('/', (req, res) => {
    res.send('happy hacking');
});

app.get('/:name', (req,res) => {
    res.send(`HI ${req.params.name}`);
});

// CRUD
// create read update destroy
// post   get   put    delete

// GET /api/movies 모두
app.get('/api/movies', (req,res) => {
    res.send(movies);
});

// GET api/movies/1
app.get('/api/movies/:id', (req,res)=> {
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    });
    // console.log(movie);  undefined는 false로 처리함. 따라서 아래처럼..
    if(!movie) {
        res.status(404).send(`movie with given id ${req.params.id} not found`);
    }
    res.send(movie);
});

// // POST api/movies/
// app.post();

// // PUT api/movies/1
// app.put();

// // DELETE api/movies/1
// app.delete();


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`)); 
