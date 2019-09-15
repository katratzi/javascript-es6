// classes...very similar to c#

//  constructor name for...constrctor :)

export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  // this funtion doesn't need the function keyword
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }

  // same...static function
  static return10() {
    return 10;
  }

  // get property
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }
}

// inherit from ... this calls parent class
export class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }

  // this will override the parent
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}

// import to other
// import { Animal } from "./animal.js";
import { Animal, Cat } from "./animal.js";
let cat = new Cat("Cat", 4, true);

// let cat = new Animal('Cat', 4);
// cat.legs = 3;
// cat.makeNoise('Meow');
// console.log(cat.legs)

console.log(Animal.return10());
