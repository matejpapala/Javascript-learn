// run `node index.js` in the terminal

var cislo = 5;
const a = 4;

console.log(`Hello Node.js v${process.versions.node}!`);
console.log('Hello World');
console.log(a);
console.log('toto je cislo:' + cislo);

const name = function (a) {
  console.log(a);
};

const name2 = (cislo) => {
  console.log(cislo);
};

const obj = {
  name: 'Matej',
  lastname: 'Papala',
};

console.log(obj.name);
console.log(obj.lastname);
