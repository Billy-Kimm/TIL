// ES5
var name = '김상연';
var title = 'Entrepreneur';
var workhour = '9 to 6';

function count (targetString){
    var characters = ['a', 'e', 'i', 'o', 'u'];
    var number = 0;
    for (var i=0; i<targetString.length; i++){
        if(characters.includes(targetString[i])){
            number++;
        }
    }
    return number;
}

// ES6
const name = '김상연';
let title = 'Father';
let workhour = '10 to 5'

function count (targetString){
    const characters = ['a', 'e', 'i', 'o', 'u'];
    const number = targetString.split('').reduce(function(acc, char){
        if(characters.includes(char)){
            acc++;
        }
        return acc;
    }, 0);
    return number;
}