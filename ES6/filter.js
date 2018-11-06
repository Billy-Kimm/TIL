// ES5 for()
var products = [
    {name: 'banana', type:'fruit'},
    {name: 'carrot', type:'vegetable'},
    {name: 'apple', type:'fruit'},
    {name: 'eggplant', type:'vegetable'},
    {name: 'tomato', type:'vegetable'},
];

var fruits = [];
for (var i = 0; i <products.length; i++){
    if(products[i].type === 'fruit'){
        fruits.push(products[i]);
    }
}

// ES6 filter()
var vegetables = products.filter(function(product){
    return product.type === 'vegtable'
})


// 실제로는?
// 실습
var numbers = [1,2,3,4,5,6,767,8,6123,123];
var bigNumbers = numbers.filter(function(number){
    return number > 50;
});

var users = [
    {id: 1, admin: true},
    {id: 2, admin: false},
    {id: 3, admin: true},
    {id: 4, admin: true},
    {id: 5, admin: false},
]
var admins = users.filter(user => user.admin);

function reject(array, iterFunction){

}
var lessThan15 = reject