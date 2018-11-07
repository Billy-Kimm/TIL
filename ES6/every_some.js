// ES5 for()
var computers = [
    {name: 'macbook-air', ram: '16'},
    {name: 'gram', ram: '8'},
    {name: 'samsung9', ram: '32'},
];

var everyComputersAvailable = true;
var someComputerAvailable = false;

for(var i = 0; i < computers.lentrh; i++){
    var computer = computers[i];
    if (computer.ram < 16){
        everyComputersAvailable = false;
    } else {
        someComputerAvailable = true;
    }
}

// ES6 every some
// every는 모두가 true 이면 true 리턴
var everyLaptopAvailable = computers.every(function(computer){
    return computer.ram > 16;
})
// some은 한개만 true 이면 true 리턴
var someLaptopAvailable = computers.some(function(computer){
    return computer.ram > 16;
})

var names = [
    'ales',
    'bill',
    'chris',
]
names.every(function(name){
    return name.length > 4;
}); // false
names.some(function(name){
    return name.length > 4;
})  // true

// 실제로는?
// var inputs = [username, password, email, address, birthday];
// var inputAreValid = inputs.every(fucntion(input){
//     return input.validate;
// });


// 실습1
var users = [
    {id:21, submit: true},
    {id:33, submit: false},
    {id:712, submit: true},
];
var allSubmited = users.every((user)=>{
    return user.submit;
});

// 실습2
var requests = [
    {url: '/photos', status:'complete'},
    {url: '/albums', status:'pending'},
    {url: '/users', status:'failed'},
];
var inProgress = requests.some((request) => {
    return request.status === 'pending';
});


// 실습3