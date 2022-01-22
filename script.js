'use strict';

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const jonas = new Person();

const matilda = new Person();

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === personalbar.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));

// . prototypeOflinkedobjects

Person.prototype.species = 'Homo Sapien';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.hasOwnProperty('species'));

//Object.prototype (Top of prototype chain)
console.log(jonas.__proto__.__proto__);

//Return null because no further protypes above it
console.log(jonas.__proto__.__proto__.__proto__);

//Points to the constructor itself
console.dir(Person.prototype.constructor);

const arr = [3, 5, 7, 3, 7, 9, 0, 1];
console.log(arr.__proto__);

//Returns true because arr prototypeis inherited from Array prototype
console.log(arr.__proto__ === Array.prototype);

//Takes you further up to where you can access object properties(note arr.proto is also a property)
console.log(arr.__proto__proto);

//not adviced to add to primary prototype
//Add method to ARRAY PROTOTYPE WHICH OTHERS CAN USE
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); //inspect  the chain
console.dir(x => x * 1);

//////////////////////////Challenges////////////////////////
/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a'Car'.A car has a'make'and a 'speed' property.
 The 'speed' property is the current speed of the car in km/h.

2. Implementan'accelerate'method that will increase the car's speed by 10,
 and log the new speed to the console.

3. Implementa'brake'method  that will decrease the car's speed by 5,
andlog the new speed to the console


4. Create2'Car'objects and experiment with calling'accelerate'and 'brake' 
multiple times on each of them.
Test data:

§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h


*/

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Cars('BMW', 120);
const Mercedes = new Cars('Mercedese', 95);

Cars.prototype.accelarate = function () {
  this.speed += 10;
  console.log(` ${this.make} is going at ${this.speed} km/hr`);
};

Cars.prototype.brake = function () {
  this.speed -= 5;
  console.log(` ${this.make} is going at ${this.speed} km/hr`);
};

BMW.accelarate();
BMW.accelarate();
BMW.brake();
BMW.accelarate();

//     ES6 Classes
// Class expressions
//const PersonCl = class{}

//Class declarations
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to the prototype property
  calAge() {
    console.log(2007 - this.birthYear);
  }

  //Set a property that already exist

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // changes first name to _firstName
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._firstName; // returns _firstName to firstName
  };

  //Static method
  static hey(){
    console.log('Hey there!');
  }

 
}



const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

jessica.calAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log('Hi there!!!');
};
jessica.greet();

const walter = new PersonCl('walter', 1987);

console.log(walter)// returns no name and the alert because of setter.Inspecting object will show no name but 'walter white' will return true for _fullName
walter.fullname // return walter because of the getter.
 



//static prototype
const PersonProto = {
  calAge(){
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear){
    this.firstName= firstName;
    this.birthYear = birthYear;
  }
};

//static

//manual assigning. Not good. Use function i.e init
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1976;
steven.calAge();

//using the init function but as Object create instead on assigning manually
const sarah = Object.create(PersonProto);
sarah.init('Sarah5', 1988);
sarah.calAge();






//1.Classes are NOT hoisted so must be used after declaration unlike functions.
//2. Class are first class citizens so you can pass in functions or return then as functuins.
//3. Classes are executed in STRICT MODE whether you have declared it or not.




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class(call it'CarCl')

2. Add a getter called'speedUS'which returns the current speed in mi/h (divide
by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in min/h(but
converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the'accelerate'and'brake'
methods, and with the getter and setter.

Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelarate() {
  this.speed += 10;
  console.log(` ${this.make} is going at ${this.speed} km/hr`);
  };

  brake() {
  this.speed -= 5;
  console.log(` ${this.make} is going at ${this.speed} km/hr`);
  };

  get speedUs(){
    console.log(this.speed / 1.6)
  }

  set speedUs(speed){
    this.speed = speed * 1.6;
  }
};





const ford = new CarCl('ford',120);
console.log(ford);


ford.accelarate();
ford.accelarate();
ford.brake();
ford.brake();
ford.accelarate();
ford.accelarate();
ford.speedUs;
CarCl.speedUs=30;
console.log(ford)