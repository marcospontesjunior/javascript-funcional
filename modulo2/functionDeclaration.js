// function declaration

function sayHelloWorld() {
  console.log("Hello World");
}

sayHelloWorld();

function sayHelloTo(name) {
  console.log("Hello " + name);
}

sayHelloTo("Marcos");

function sayHelloTo2(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo2("Marcos");

function returnHi() {
  return "Hi";
}

var greeting = returnHi();
console.log(greeting); // ou
console.log(returnHi());

function returnHiTo(name) {
  return `Hi ${name}`;
}

console.log(returnHiTo("Marcos"));