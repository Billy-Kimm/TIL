const http = require('http');
const url = 'http://www.csszengarden.com';

http.get(url, (response) => {
    let chuckCount = 0;

    response.on('data', (chunk) => {
        chuckCount++;
        console.log('---------------------------')
        console.log(chunk.toString('utf8'))
    });
    response.on('end', () => {
        console.log(`res가 ${chuckCount}개로 나눠졌어요`);
    });
});