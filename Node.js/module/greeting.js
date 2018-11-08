module.exports = {
    sayHelloInKorean(){
        return '안녕'
    },
    sayHelloInEnglish(){
        return 'hello'
    },
    sayHelloInSwedish(){
        return 'Hej'
    },
};


// exports.sayHelloInKorean = () => {
//     return '안녕!';  
// };

// exports.sayHelloInEnglish = () => {
//     return 'hi!';  
// };

// exports.sayHelloInSwedish = () => {
//     return 'Hej';  
// };


// 모듈로 클래스를 넘긴다. 대문자로 시작!
// module.exports = Car 
// class Car {
//     constructor(name){
//         this.name = name;
//     };

//     drive (){
//         return '부릉부릉'
//     }
// }