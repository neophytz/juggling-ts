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

class Student {
    // attributes
    public name: string;
    public age: number;
    public roll: string;

    private hSize: number;

    something: any;

    constructor(name: string, age: number){
        // is a default method;
        // purpose is to initialize the values of the class.
        // it gets invoked/executed automatically, everytime an object is created;
        this.name = name;
        this.age = age;
        this.roll = name + age + '';
        this.hSize = 6;
    }

    gfAskedSized = () => {
        return this.hSize * 2;
    }

    // methods
    study = (): void => {
        console.log("I'm studying...");
    }

    dance = () => {
        console.log("I'm dancing...");
    }

    private goToOyo = () => {
        
    }
}

class President extends Student {
    club: string;

    rule = () => {

    }
}

const __student = new Student("sachin", 12);
const _rachit = new Student("rachit", 21);

const size = _rachit.gfAskedSized();

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


