// exports 디폴트 설정
console.log("1번만 출력!");

module.exports = function(numbersToSum=[]){
    let sum = 0;
    numbersToSum.forEach(number => sum += number);
    return sum;
};

console.log("진짜로요");

