
console.log('Hey Ivan');
console.log(__dirname);
console.log(__filename);

setTimeout(function(){
    console.log('1 sec have passed');
}, 1000);

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + ' sec have passed');
    if (time >= 4){
        clearInterval(timer);
        callFunction(sayBye);
    }
}, 2000);

//function statement
function sayHi(){
    console.log('Hi');
}
sayHi();

//function Expression, popular pattern in NodeJS
var sayBye = function(){
    console.log('Bye');
}
function callFunction(fun){
    fun();
}

var counter = require('./count');
console.log(counter(['shaun','crystal','ryu']));

var stuff = require('./stuff');
console.log(stuff.counter(['shaun','crystal','ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));

var events = require('events');
var myEmitter = new events.EventEmitter();
//listen to a someEvent and log a message to console
myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
})
myEmitter.emit('someEvent', 'The event was emitted');


var Person = function(name){
    this.name = name;
}

var util = require('util');
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

util.inherits(Person, events.EventEmitter);

//Event Listener
people.forEach(function(person){
    // Speak Event Listener
    person.on('speak', function(mssg){
        console.log(person.name + ' said:' + mssg);
    });
    // Eat Event Listener
    person.on('eat', function(mssg){
        console.log(person.name + ' eat:' + mssg);
    });    
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');
mary.emit('eat', 'curry rice');