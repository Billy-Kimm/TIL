const sum = require('./utility.js');
// const fs = require('fs');
// const express = require('express);
// const sum = require('./utility.js');
// const dbconfig = require('/configs/database.json);

const total = sum([100, 200, 300]);
console.log(total);
// 10번째 줄은 출력되지 않는다. module안에서 한번만 실행이된다.
console.log(sum[100,200,300]);