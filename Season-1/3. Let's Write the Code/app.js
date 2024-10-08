var name = "Namaste NodeJS"

var a = 10 ;

var b = 20 ;

// console.log(name);
// console.log(a+b);

// console.log(global);

console.log(this);  // Empty Object


// Inside dev tools console - window , this , self , frames all Refers to Window Object 

console.log(globalThis);

console.log(globalThis === global);