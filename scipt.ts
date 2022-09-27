// primitive
// non-primitive

/*
  
  int 
  boolean
  string
  null
  undefined

  unknown 
  any
*/

const another: string = '12'; 

const age: number = 12;
// age  = 15;

const roy_single_h: boolean = true;

let something: string = 'pra nai kta';
something = 'ab pta chal gya';

type BloodGroup = 'A' | 'B' | 'AB' | 'O'; // union
let bloodGroup: BloodGroup = 'A';

// array?
const marks: Array<number> = [];
const votes: number[] = [];

type NumOrString = number | string;

const address = {
  line: 'sachin',
  pincode: 110032,
  line2: 'duhan',
  landmark: {
    line1: ''
  }
}

const meaning: typeof marks = [];

// type Student = {
//   name: string,
//   age: number,
//   license?: string
// }

// non premitive data type

interface Student {
  name: string,
  age: number,
  id_card: string | number
}

interface President extends Student {
  club: string,
}

const sachin: President = {
  age: 2,
  id_card: 'as',
  name: 'sachin',
  club: 'pta nai'
}

// function getSalary(efforts: number): number {

// }

// const makeMoney = (efforts: number) :number => {
  
// }


// interface 
/**
 * we define the attirbutes and their names in advance and not the actual functionality
 * 
*/

let data: any = {};

// const __humans: Student[] = [
//   {
//     name: 'sachin',
//     age: 12,
//     license: '12182012',
//   },
//   {
//     name: 'sachin',
//     age: 12,
//   },
// ]

let varia = 12;

const lunch: string[] = ['roti', 'sbji'];


// implicit and explicit

// implicit - khud se 
// explicit - we manually define. 





let a: any = -2;
a = parseInt(a);
a = +a; /// shortcut method of making suree that we have a number only.

let b: any = 2;
b = b.toString();
b = b + '';

























