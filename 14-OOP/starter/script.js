'use strict';
// inheritance between classes with constructor functions

const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function ()
{
    console.log(2037 - this.birthYear);
};

// CF for student
const Student = function(firstName, birthYear ,course)
{
    Person.call(this, firstName , birthYear);
// this.firstName =firstName;
// this.birthYear =birthYear;
this.course=course;
};

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I am studying the course ${this.course}`);
}

const mike = new Student('Mike', 2001 , 'Javascript');
console.log(mike);
mike.introduce();

