// ES5 something like class .. ? 
/*
function Car (options) {
    this.title = options.title
}

Car.prototype.drive = function () {
    return 'vroom';
}

var car = new Car({title: 'genesis'});

function Ferrari(options){ // 상속
    Car.call(this, options);
    this.color = options.color;
}

Ferrari.prototype = Object.create(Car.prototype);
Ferrari.prototype.constructor = Ferrari;
Ferrari.prototype.honk = function(){
    return 'Baaammmm'
}

var myFerrari = new Ferrari({color:'red', title:'laFerrari'});
*/


// ES6 Class
class Car{
    constructor({title}) {
        this.title = title;
    }
    drive(){
        return 'Vroom';
    }
}

class Audi extends Car {
    constructor(options){
        super(options);
        this.color = options.color;
    }
    honk(){
        return '빵빵';
    }
}

const car = new Car({title: 'A6'});
console.log(car);
console.log(typeof car);


// 실습1 
class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}
const monster = new Monster({name:'a1'});


// 실습2
class Pickachu extends Monster {
    constructor(options){
        super(options);
    }
    bite(monster){
        monster.health -= 10;
    }
}

const jobmob = new Monster({name:'잉어킹'});
const pickachu = new Pickachu({name:'데드풀'});

pickachu.bite(jobmob);
console.log(jobmob);
console.log(pickachu);