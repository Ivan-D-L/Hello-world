
//var a = [2, 4, 6, 'Joe', 10, [1, 2], {lastName: 'Smith'}];

//console.log(a[5]);

//#1#1#1#1 The value of a[5] is the object array [1,2], where 1 is at index 0 and 2 is at index 1.

//#3
function Thing(name) { //constructor   //Thing("John Smith")

    this.name = name;                  //this.["John Smith"] = John Smith

}

Thing.prototype.doSomething = function(callback, salutation) {   //this is where the callback function is implemented

    callback.call(this, salutation);	//the value of this is the object that currently owns the code which in this case is the thing constructor
                                        //Since we currently do not have an object created we are not executing this function right away, but the point
                                        // of callback functions is so we can point to it when the code requires.
                                        //we use call to set this to the value to an explicit value
}

function Afunction(salutation) {                    //Afunction takes a single parameter which then is put into a console.log function

    console.log(salutation + " " + this.name);
}

var t = new Thing('John Smith'); //initializing an object to the constructor

t.doSomething(Afunction, 'Hello'); // This is the callback

// t.doSomething uses Afunction and passes 'hello' as the parameter for the salutation parameter, which then is put through the callback where
// Call invokes this to return "John Smith" and the current value of salutation which is "Hello"

// "John Smith" gets passed through the constructor,
// t.dosomething uses the prototype function where the callback is set to return the name and the parameter set in this case 'Hello'
//When the higher order function is called, the specified callback function gets called and Hello John Smith gets printed out.

//#4 #4

//object oriented programming is wonderful, especially in javascript where everything is treated as an object.
// For example there are many things we can do such as create
//functions that work with our items, rather than making individual functions for every little thing.
//This allows us to use things such as callbacks and use polymorphism to its fullest potential.
//Object oriented programming provides a clean and wonderful structure to code which makes it easier to work with not just for the individual but for team members too.
//Making New objects has never been easier when there only needs to be a minimal amount of changes for the code to be efficient and operational.
