// ES5 for()
var numbers = [10, 20, 30];
var sum = 0;

for(var i=0; i< numbers.length; i++){
    sum += numbers[i];
}

// ES6 reduce 압축 혹은 쌓아나간다
var result = numbers.reduce(function(acc,number){
    return acc + number;
}, 0); // 0부터 acc(축적)을 시작한다. 즉 0 + 10 + 20 + 30  = 60 

// map vs reduce
var myColors = [
    {color: 'black'},
    {color: 'red'},
    {color: 'gold'},
];
var onlyColor = myColors.map(function(myColor){
    return myColor.color;
});

var oColors = myColors.reduce(function(acc, c){
    acc.push(c.color);
    return acc;
},[]);

// 실제로는?  
// '(((()()()())))'   ( )
function isGoodParens(string){
    
    var array = string.split('');
    return !array.reduce(function(acc, char){
        if(acc<0){
            return acc;
        } else if(char === '(') {
            ++acc;
        } else {
            --acc;
        }
        return acc
    }, 0)        
}

// 실습1
var trips = [
    {distance: 34},
    {distance: 10},
    {distance: 100},
];

var totalDistance = trips.reduce(function(acc, trip){
    return acc += trip;
}, 0);

// 실습2
var desks = [
    {type: 'sitting'},
    {type: 'standing'},
    {type: 'sitting'},
    {type: 'sitting'},
    {type: 'standing'},
];
var deskTypes = desks.reduce(function(acc, desk){
    if(desk.type == 'sitting'){
        acc.sitting++;
    }
    if(desk.type == 'standing'){
        acc.standing++;
    }
    return 
},{sitting:0, standing:0});

// 실습3
function unique(array){
    array.reduce(function(acc, element){
        if(!acc.find(function(uniqElement){
                return element === uniqElement;
            })){
                acc.push(element);
            }
            return acc;
    }, []);
}
var numbers = [4,1,3,2,2,1,3,3,4,4,4];
unique(numbers);    //[1,2,3,4]

