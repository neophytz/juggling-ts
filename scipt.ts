const vars : boolean = false;

const another: string = 'string'; 

const age: number = 12;

let something: string = 'pra nai kta';
something = 'ab pta chal gya';

let bloodGroup: 'A' | 'B' | 'AB' | 'O' = 'A';

// array?
const marks: Array<number> = [];
const votes: number[] = [];


type Student = {
  name: string,
  age: number,
  license?: string
}


// non premitive data type
type Human = {
  name: string,
  age: number,
  id_card: string | number
}

const __humans: Student[] = [
  {
    name: 'sachin',
    age: 12,
    license: '12182012',
  },
  {
    name: 'sachin',
    age: 12,
  },
]

