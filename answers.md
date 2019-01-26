Describe the biggest difference between .forEach & .map.
.forEach - executes a provided function once for each element of an array. 
.map - returns/creates a new array, with the results of calling a function on every element of an array.  



What is the difference between a function and a method?
Method is defined as the property of an object and is a function defined inside the object.
    eg: let obj = {name: "John", age: 32, speak:function(){return 'hi'}};
Function is defined outside of an object and will be executed when called. 



What is closure?
A closure is a function where an inner function has access to the outer (enclosing) function’s variables, even after the outer function's has closed.


Describe the four rules of the 'this' keyword.
1.  Window Binding: Window binding of 'this' has a global function and is default. It occurs when function is called without any rules. 
2.	Implicit Binding: Implicit binding of 'this' occurs when function is called by a preceding dot to invoke a function.
3.	Explicit Binding: Explicit binding of 'this' occurs when .call(), .apply(), or .bind() methods are used on a function.
4.	New Binding: Whenever a constructor function is used, 'this' refers to object that is created and returned by the constructor function.



Why do we need super() in an extended class?
Super is a function which calls the constructor of the base class inside of a sub class.  It avoids duplicating the constructor that is common between base and extended class.