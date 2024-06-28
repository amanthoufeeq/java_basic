console.log("Hello World")

var a=10;
console.log(a);

var a="name"
console.log(a);
let name="messi"
console.log(name)

const pi=3.14
console.log(pi);

//type conversion
let valueOne=2;
let valueTwo="2";
console.log(valueOne+valueTwo);
console.log(valueOne+parseInt(valueTwo));


const pname="john";
const age=30;
const isCool="true";

console.log(typeof pname)
console.log(typeof age)

//concatenate
console.log('My name is ' +pname+ ' and age is ' +age);

//array
arrayOne=["John",30,true,null,undefined];
console.log(arrayOne);
arrayOne.push("apple");
console.log(arrayOne);
arrayOne.pop();
console.log(arrayOne);
arrayOne.unshift("Mango");
console.log(arrayOne);
arrayOne[3]="Orange";
console.log(arrayOne);

console.log(arrayOne.length);

//to delete starting from a position
arrayOne.splice(3,2);
console.log(arrayOne);

let valueOnee="2";
let valueTwoo=2;

console.log(valueOnee==valueTwoo);
console.log(valueOnee===valueTwoo);


//conditional
let value=16

if (value>=18)
    {
        console.log("adult");

    }else{
        console.log("minor");
    }

    let agee=21;
    let type=(age>=18)?"adult":"Minor";
    console.log(type);    