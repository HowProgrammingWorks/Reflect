'use strict';

const person = { name: 'Marcus Aurelius' };

class Person {}

const success1 = Reflect.setPrototypeOf(person, Person.prototype);
const success2 = Object.setPrototypeOf(person, Person.prototype);

console.dir({ person, success1, success2 });

// const proto1 = Object.getPrototypeOf(person);

const proto1 = Reflect.getPrototypeOf(person);
const proto2 = Reflect.getPrototypeOf(proto1);
const proto3 = Reflect.getPrototypeOf(proto2);

console.dir({ proto1, proto2, proto3 });
