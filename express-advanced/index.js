// middleware
const home = require('./routes/home')
const movies = require('./routes/movies');
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
//const Joi = require('joi');
const express = require('express');
const app = express();

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

// express 내장함수
app.use(express.json());
// json parsing후에 users?!key블러블러를 object로 바꿔주는 역할
app.use(express.urlencoded({ extended: true }));
// public 폴더에서 static 파일을 사용 url은 root후 바로 public 폴더이름으로함.
app.use(express.static('public'));
app.use(logger);
app.use(auth);
app.use('/api/movies', movies);
app.use('/', home);

app.set('view engine', 'pug');
app.set('views', './views'); // default

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));