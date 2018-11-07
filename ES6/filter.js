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
var posts = [
    {id: 1, title: 'new post', content: 'great'},
    {id: 2, title: 'ES6 means..', content: 'EcmaSciprt6'},
];

var comments = [
    {postID: 1, content: 'awesome'},
    {postID: 2, content: 'its also known..'},
    {postID: 2, content: 'we need bacll'},
    {postID: 1, content: 'brand new:'},
    {postID: 2, content: 'ES6 supports filter'},
];

// 특정 id를 갖는 post를 뽑아내는 function
function setPost(id, posts){
    return posts.filter(function(post){
        return post.id === id;
        }
    );
};

// 특정 post에 달린 comment를 뽑아내는 function
function commentsForPost(post, allComments) {
    return allComments.filter(function(comment) {
        return comment.postID === post.id;
    });
  }

var my_post = setPost(2, post)[0]; // setPost()의 결과물이 배열이기 때문에 index 접근 필요

// id 2번인 post의 댓글을 뽑으려면?
console.log(commentsForPost(my_post, comments));

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

// 실습 2
var numbers = [10,20,30];

function reject(array, iterFunction){
    var filteredArray = array.filter(function(element){
        return !iterFunction(element);
    });
    return filteredArray;
}

function myFunction(number){
    return number > 15;
};

var lessThan15 = reject(numbers, myFunciotn);
console.log(lessThan15)

