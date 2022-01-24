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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to the prototype property
  calAge() {
    console.log(2007 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //Set a property that already exist
  get age() {
    console.log(2037 - this.birthYear);
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // changes first name to _firstName
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._firsttName; // returns _firstName to firstName
  }

  //Static method
  static hey() {
    console.log('Hey there!');
  }
}

const jessica = new PersonCl('Jessica Sam', 1996);
console.log(jessica); // Will alert jessica is not a full name

jessica.calAge();
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log('Hi there!!!');
};
// jessica.greet();

const walter = new PersonCl('walter white', 1987);

console.log(walter); // returns no name and the alert because of setter.Inspecting object will show no name but 'walter white' will return true for _fullName
walter.fullname; // return walter because of the getter.

//static prototype
const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
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
  }

  brake() {
    this.speed -= 5;
    console.log(` ${this.make} is going at ${this.speed} km/hr`);
  }

  get speedUs() {
    console.log(this.speed / 1.6);
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
console.log(ford);

ford.accelarate();
ford.accelarate();
ford.brake();
ford.brake();
ford.accelarate();
ford.accelarate();
ford.speedUs;
CarCl.speedUs = 30;
console.log(ford);

// Inheritance between classes

/*
function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
*/

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking the classes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};

Student.prototype.constructor = 'Student'; //Object create pointed constructor to Person onstead of Student
console.log(Student.prototype);

const mike = new Student('mike', 2002, 'Computer Science');
mike.introduce();
mike.calcAge();
/*
Coding Challenge #3
Your tasks:
1. Use a constructor functiontoimplementanElectricCar(called'EV')asachild "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
2. Implementa'chargeBattery'methodwhichtakesanargument 'chargeTo' and sets the battery charge to 'chargeTo'
3. Implementan'accelerate'methodthatwillincreasethecar'sspeedby20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Createanelectriccarobjectandexperimentwithcalling'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

//  ES6 Inheritance
//Using PersonCl
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course} `);
  }
  calcAge() {
    console.log(
      `I'm ${this.birthYear} but as a student I feel ${this.birthYear + 10} `
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();

//Inheritance :Object.create
//using Personproto above
/*
const PersonProto = {
  calAge(){
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear){
    this.firstName= firstName;
    this.birthYear = birthYear;
  }
};
 */

const Steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `);
};
const jay = Object.create(StudentProto);

jay.init('Jay', 2002, 'Computer Science');
jay.introduce();
jay.calAge();

//Challenge 4
/*
Your tasks:
1. Re-createChallenge#3,butthistimeusingES6classes:createan'EVCl' child class of the 'CarCl' class
2. Makethe'charge'propertyprivate
3. Implementtheabilitytochainthe'accelerate'and'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% .
*/


//Other thingsabout classes
//adding properties that are not appearing in parameters

     //public fields
    //Private fields
    //Public Methods
    //Public Methods
    // there is also the static versions
class Account {
  //Public fields
  locale = navigator.language;
  _movements = [];

  //private fields
  #movements = []
  #pin;  // this will be set to undefined but reset with this.#pin

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //Protected property
    this.#pin = pin;
    this.#movements = [];
    this.locale = navigator.language;
  }
  //Public interface(Methods) they can access them but cannot manipulate them
  // Public interface
  getmovements(){
    return this.#movements
  }
  deposit(val) {
    this.#movements.push(val);
    return this;  // so chainin doesnt return undefined. bcause no value explicitly ststed here.
  }

  withdraw(val) {
    this.deposit(-val);
    return this; 
  }
  // Private methods
  // #approveLoan() {  not yet in place 
  _approveLoan() {
    return true;
  }

  requestLoan(val) {
    // if (this.//#endregionapproveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; 
    }
  }
};

   
const acc1 = new Account('Jonas', 'Eur', 111);


acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(10000)

console.log(acc1);
console.log(acc1.pin); // undefined

//Chaining 
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(10000).withdraw(500);
console.log(acc1.getmovements())

//movements updated. but best to use API- PUBLIC INTERFACE OF THE OBJECTS:function in the parent object

// acc1._movements.push(250);
// acc1._movements.push(-50)
/*


Your tasks:
1. Re-create Challenge#3,butthistimeusingES6classes:create an'EVCl' child class of the 'CarCl' class
2. Makethe'charge'propertyprivate
3. Implementtheabilitytochainthe'accelerate'and'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% GOOD LUCK 😀

*/


class EVCL extends CarCl {
  #charge;


  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge;
  };
  chargeBattery(chargeTo){  // enable to access property from outside.
    this.#charge = chargeTo;
    return this;
  };
  

  accelarate() {
    this.speed += 20;
    this.#charge--;

    console.log(` ${this.make} is going at ${this.speed} km/hr with a charge of ${this.#charge}`);
    return this;
  };

  brake() {
    this.speed -= 5;
    console.log(` ${this.make} is going at ${this.speed} km/hr`);
    return this;
  }; 
};




const Rivian = new EVCL('Rivian', 120, 23);
console.log(Rivian);


Rivian.accelarate().accelarate().accelarate().brake().chargeBattery();
