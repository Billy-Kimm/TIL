var numbers = [1,2,3];
var dNumbers = [];

for (var i=0; i<numbers.length; i++){
    dNumbers.push(numbers[i] * 2);
}

// ES6
var tNumbers = numbers.map(function(number){
    return number * 3;
});

// 실제로는?
var posts = [
    {title: 'happy', content:'hacking'},
    {title: 'multi', content: 'campus'},
]

var frontElement = posts.map(function(post){
    return `<h1>${post.title}</h1><p>${post.content}</p>`
});

// 
var images = [
    {h:"10px", w: "20px"},
    {h:"200px", w: "100px"},
    {h:"1000px", w: "2000px"},
]
var heights = images.map(function(image){
    return image.h;
});

var trips = [
    {distance: 34, time: 10},
    {distance: 334, time: 100},
    {distance: 314, time: 1023},
]
var speeds = trips.map(function(trip){
    return (trip.distance/trip.time);
});


function pluck (array, property) {
    var values = array.map(function(element){
        return element[property];
    });
    return values;

    // var result = paints.map(function(colors){
    //     return colors[color];
    // });
}

var paints = [
    {color: 'red', price:100},
    {color: 'white', price:200},
    {color: 'brown', price:300},
    {color: 'navy', price:400},
]

pluck(paints, 'color')