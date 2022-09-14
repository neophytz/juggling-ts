let foo = 23;
console.log(foo);

foo = 'sachin duhan'
console.log(foo);

foo = 2.22222

console.log(foo);

const dictionary = new Map();

foo = [
    'something',
    'and wow'
]

console.log(foo);

foo = {
    call: 'something',
    val: {
        another: 11
    }
}

console.log(foo.call);

foo = [12,12,112,12];

// during run time, we get fucked...!!
console.log(foo.val.another);