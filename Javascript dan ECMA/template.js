let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukkan umur C.Ronaldo !");

// Cara Lama
// let result = fname+ '' + lname + 'is' + age + ' years old';
// alert(result);

//memakai tempalte strings

let result = `${fname} ${lname} is ${age} years old`;
alert(result);