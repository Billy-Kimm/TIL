
// rest 나머지
const addNubmers = (a,b) => {
    const numbers = [a,b];
    return numbers.reduce((acc, number) => {
        return sum += number;
    }, 0)
};

addNubmers(1,2,3,4,5,6,7)

const addAll = (...numbers) => {
    return numbers.reduce((acc,number) => {
        return acc += number;
    }, 0)
}

// spread
let defaultColors = ['red', 'green', 'blue'];
let myColors = ['black', 'navy', 'gold'];
let iphoneColors = ['123124', '123124'];

// string concat
let palette = defaultColors.concat(myColors);
// spread를 이용한 합치기
palette = ['brown', 'white', ...defaultColors, ...myColors, ...iphoneColors];


// 실습
const showShoppingList = (...items) =>{
    if(items.indexOf('milk' < 0)){
        return ['milk', ...items]
    }
} 

// 실제 개발에서는? 
const MathLibrary = {
    calculateProduct(a,b){
        return a*b;
    }
}

let MathLibrary = {
    Multiply(a,b){
        return a * b;
    },
    calculateProduct(...args){
        console.log('Please use mehtod "multiply" instead :)');
        return this.Multiply(...args);
    }
};

// 실습 refactoring
const join = (array1, array2) => {
    let result = [...array1, ...array2];
    return result;
}

// 
const unshift = (array, a, b, c, d, e) => {
    let result = [a, b, c, d, e, array];
    return result;
}