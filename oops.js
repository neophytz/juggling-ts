// class Child {
//     name: string;
//     constructor(){
//         this.name = 'bina naam ka bacha';
//     }
//     cry = () => {
//         console.log(this.name, 'oaaaawwwww');
//     }
// }
// const roy = new Child();
// roy.cry();
// blueprint
// does not takes memory
// we make objects
// it is analogical to real world cases.
// advantages => abstraction, inheritance, encapsulation, polymorphism
var Student = /** @class */ (function () {
    function Student(name, age) {
        var _this = this;
        this.gfAskedSized = function () {
            return _this.hSize * 2;
        };
        // methods
        this.study = function () {
            console.log("I'm studying...");
        };
        this.dance = function () {
            console.log("I'm dancing...");
        };
        this.goToOyo = function () {
        };
        // is a default method;
        // purpose is to initialize the values of the class.
        // it gets invoked/executed automatically, everytime an object is created;
        this.name = name;
        this.age = age;
        this.roll = name + age + '';
        this.hSize = 6;
    }
    return Student;
}());
var __student = new Student("sachin", 12);
var _rachit = new Student("rachit", 21);
var size = _rachit.gfAskedSized();
console.log(size);
// console.log(__student.name);
// const student = {
//     name: 'sachin',
//     age: 12,
//     rollNo: 112,
//     study: ()=>{
//         console.log("I'm studying...");
//     },
//     dance: ()=>{
//         console.log("I'm dancing...");
//     }
// }
// const student2 = {...student};
// student2.name = 'rachit';
