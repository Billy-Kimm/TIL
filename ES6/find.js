// ES5 for()
var users = [
    {name: 'tony'},
    {name: 'steve'},
    {name: 'thor'},
]
var user;
for (var i=0; i<users.length; i++){
    if(users[i].name === 'thor') {
        user = users[i];
        break; // 다 돌 필요 없어.
    }
}

// ES6  filter는 하나만 찾아도 배열로 아웃풋. find는 하나만 찾고 끝.
// find는 보통 DB에서 PK 접근에 쓰임.
var user = users.find(function(user){
    return user.name === 'tony';
}); 

// MORE COMPLEX CODE
function Car(Model){
    this.model = model;
}

var cars = [
    new Car('Mercedes'),
    new Car('Ferrari'),
    new Car('BMW'),
    new Car('HK'),
];

var car = cars.find(function(car){
    return car.model === 'BMW';
});

// 실제로는? 
const articles = [
    {id: 1, title: 'motto', content: 'happyhacking'},
    {id: 2, title: 'my personal info', content: 'happyhacking2'},
    {id: 3, title: 'ruby vs', content: 'happyhacking3'},
    {id: 4, title: 'welcome to', content: 'happyhacking4'},
];

const articleId = getIdFromURL();
const article = articles.find(function(article){
    return article.id === articles.id;
})

// 실습 1
var users = [
    {id:1, admin: false},
    {id:2, admin: false},
    {id:3, admin: true},
];
var admin = users.find(function(user){
    return user.admin; // == true
});

// 실습 2
// 잔액이 12인 계좌를 account에 저장하자.
var accounts = [
    {balance: -10},
    {balance: 12},
    {balance: 0},
];

var account = accounts.find(function(account){
    return account.balance == 12;
});

// 실습 3
var ladders = [
    {id:1, height:20},
    {id:3, height:25},
]

function findWhere(array, standard){
    var property = Object.keys(standard)[0];
    return array.find(function(element){
        return element[property] === standard[property];
    });
    
    
    // laders.find(function(lader){
    //     if(lader.keys === "id"){
    //         array.push = (lader.id === 3);
    //     } else if (lader.keys === "height"){
    //         array.push = (lader.height === 20);
    //     }
    // });
};

findwhere(ladders, {height:20});
findwhere(ladders, {id:3});
