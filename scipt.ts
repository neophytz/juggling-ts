/*
  int 
  boolan
  string
  unknown 
  any
  undefined
*/

const another: string = 'string'; 

const age: number = 12;

let something: string = 'pra nai kta';
something = 'ab pta chal gya';

type Bloodgroup = 'A' | 'B' | 'AB' | 'O';
let bloodGroup: Bloodgroup = 'A';

// array?
const marks: Array<number> = [];
const votes: number[] = [];

type NumOrString = number | string;

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



