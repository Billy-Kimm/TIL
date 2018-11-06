var colors = ['red', 'blue', 'green'];

for(var i=0; i<colors.lentgh; i++){
    console.log(colors[i]);
}

// ES6 forEach()
colors.forEach(function(color){
    console.log(color);
})

var numbers = [1,2,3,4,5];
var sum = 0;

numbers.forEach(function(number){
    sum += number;
});

console.log(sum);

// in real world
spamMails = [];
spamMails.forEach(function(spamMail){
    deleteMail(spamMail);
})

function handlesPosts(){
    var posts = [
        {id:23, title:'daily'},
        {id:52, title: 'code'},
        {id:105, title:'brightest'},
    ];

    posts.forEach(function(post){
      savePost(post);  
    });
}

var images = [
    {height:10, width:30},
    {height:20, width:90},
    {height:54, width:32},
];

var areas = [];
images.forEach(function(each){
    areas.push(each.height * each.width);
});

