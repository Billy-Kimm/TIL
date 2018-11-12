const express = require('express');
const Joi = require('joi'); 
const app = express();

const users = [
    {id:1 , name:'kim', email:'sangyounw@naver.com', age:'30'},
]


app.get('/api/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    res.send(user);
});


app.post('/api/users/', (req, res)=>{
    const schema = {
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required(),
        age: Joi.string().min(3).required(),
    }

    const result = Joi.validate(req.body, schema);
    if(result.error) return res.send(result.error.details[0].message);

    const user = {
        id: users.length+1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    };
    users.push(user);
    res.send(user);
});


app.put('/api/users/:id', (req, res)=>{
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).send(`the user is ${req.params.id} does not exist`);

    const {error} = validateUser(req.body);
    if(error) return res.status(400).send(error.message);

    user.name = req.body.name;
    user.email = req.body.email;
    user.age = req.body.age;
    res.send(user);
 
});


app.delete('/api/users/:id', (req, res)=>{
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(!iuser) return res.status(404).send(`the user is ${req.params.id} does not exist`);

    const index = users.indexOf(user);
    users.splice(index,1);
    res.send(user);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));


