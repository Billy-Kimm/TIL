const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('happy hacking');
})

app.get('/api', (req, res) => {
    const data = {
        ceo: 'kim',
        director: 'kim',
        intern: 'js',
        partner: 'park',
    };
    res.send(data);
});


app.get("/api/courses/:id", (req,res)=> {
    res.send(req.params.id);
});

// 예: https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=rest
app.get("/api/posts/:year", (req,res)=>{
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

