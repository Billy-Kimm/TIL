// ES5
const add = function(a,b) {
    return a+b;
}
add(1,2)

// ES6
let multiply = function(a,b){
    return a*b;
};
multiply = (a,b) => {
    returna*b;
};
multiply = (a,b) => a*b; // 한줄일 경우만 가능
let double = number => number * 2; // 한줄이고 parameter도 하나일 경우 ()도 생략가능


const numbers = [1,2,3];
const doubleNumbers = numbers.map((numbers) => {
    return 2*number;
});
doubleNumbers = numbers.map(number => 2* number);




