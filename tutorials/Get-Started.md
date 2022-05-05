
This Documentation is a practice to have a better way to document my code, using the syntax of [jsDoc](https://jsdoc.app/) to created the different  parts for explain my code. 

just explain how to use tow specific parts from  whole code:

## Class Programmer 

Class to create a new  programmer  instance  

### Using 

this class just need two arguments to created  a new instance 

````` js
const Programer =  require("Programer");

const newProgrammer = new Programer({
    name:"firstName", 
    lastName:"lastName", 
    age:30,   /* it's optional*/
    friends:[{name:"pedro", age:10 }]
}, "Go")

newProgrammer.getinfo() 
// =>  `i am  firstName lastName  and my favorite programming language is Go `
`````

## Module MyMath 

this module have the next methods 

### add 

this method make a sum between two numbers

````js
const myMath =  require("MyMath");
const sum = myMath.add( 1 , 50 );
console.log(sum)// => 51
````

## pow 

this method calculated the value in specific potency 

````js
const myMath =  require("MyMath");
const sum = myMath.pow( 6 , 2  ); 
console.log(sum)// => 36
