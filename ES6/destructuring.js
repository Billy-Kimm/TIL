// ES5 Object
var computer = {
    model: 'LG Gram',
    year: 2017,
};

var model = computer.model;
var year = computer.year;


// ES6 Object
const laptop = {
    model: 'macbook air',
    year: 2018,
};

const { model, year } = laptop;


// ES5 Function
var savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: 29847,
};

function fileSummary(file){
    return `The file ${file.name}.${file.extension} 의 크기는 ${file.size} 입니다`
} ;

// ES6 Function
const myFile = {
    extension: 'jpg',
    name: 'profile',
    size: 29847,
};

function summary({name, extension, size}) {
    return `The file ${file.name}.${file.extension} 의 크기는 ${file.size} 입니다`
};
summary(myFile);


// ES6 Array
const companies = [
    'Google',
    'IBM',
    'Amazon',
    'Apple'
];

const [name] = companies;
const [name1, name2, name3] = companies;
const {length} = companies;
const [one, ...rest] = companies;


// Array & Object
const wannaGo = [
    {name: 'google', location: 'mountain view'},
    {name: 'facebook', location: 'menlo park'},
    {name: 'apple', location: 'cupertino'}
];

let [company] = wannaGo;
[{location}] = wannaGo; // wannerGo[0].location


// 실제 개발에서는?
const points = [
    [7,12],
    [-20,3],
    [8,0]
];

points.map( ([x,y]) => {
    //const x = pair[0];
    //const y = pair[1];
    //const [x,y] = pair;
    return {x,y};
})

function signup( {username, password, email} ){
    // Create user;
}
const user = {
    username:'neo',
    password:'123123',
    email:'asdfsf@asdf.com'
}

signup(user);

// 실습 1
const profile = {
    title: 'engineer',
    department:'blockchain',
}

function isEngineer(profile){
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'blockchain'
}

// 실습 2
const classes = [
    ['실습 dapp', '9am', 'mr.john'],
    ['react', '1pm', 'neo'],
    ['capstone', '3pm', 'nulticampus'],
]
// [{subject: 'react, time:'1pm', teacher:'neo'}, { }, { } ]
const classAsObject = classes.map(( [subject, time, teacher] )=>{
    return {subject, time, teacher}
})