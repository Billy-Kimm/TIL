// events 는 core module
const EventEmitter = require('events');

// 생성자
class Job extends EventEmitter{}

const job = new Job();

// eventListener
job.on('warning', (season) => {
    console.log(`${season} is coming...`);
});


job.emit('warning', 'winter');