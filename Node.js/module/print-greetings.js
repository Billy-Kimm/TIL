const greetings = require('./greeting');

console.log(
    `English:${greetings.sayHelloInEnglish()}
    & Korean:${greetings.sayHelloInKorean()}
    & Swedish:${greetings.sayHelloInSwedish()}`
);