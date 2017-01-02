##Chapter 4 Notes
<h5>Classes<h5>

General info about classes & OO Design principles.<br>
Imagine 2 different classes, vehicle and car class.<br>
A car is a type of vehicle so there will be common ground.<br>
No point in redifining the common ground ie. Carry passengers.<br>
Might aswell keep it in Vehicle and let car inherit that.<br>

Class/Inhertiance/Instantiation

<h5>Polymporphism.</h5>
-General behavior from parent class can be overriden in a child class when specified.
- Parent and child class should share same method names for certain behaviour
- relative polymorphism lets us reference base behavior from overriden behavior.
<br><br>
 <h6>---DOES ALL THIS APPLY IN JAVASCRIPT THOUGH?<br>
--- WE MIGHT HAVE TO LEAVE THE CLASS IN THE TRASH?</h6>


<h5>Class Mechanics</h5>
Class is a blueprint.
Must instantiate object from class to interact with it. 
From thus we can call methods on and access properties.
<br><br>
really and trully
Object is a copy of all the characteristics described by the class
<Br><br>
<h5>Constructor</h5>.
Instances are constructed by constructors.
job is to initialize any info~(state) the instance will need.
<br><br>
```
    class CoolGuy {
    specialTrick = nothing

    CoolGuy( trick ) {
     specialTrick = trick
     }

    showOff() {
    output( "Here's my trick: ", specialTrick )
    }
    }
    ```
<br><br>
To make a CoolGuy instance
<br>
    ``` Joe = new Coolguy("Jumping ROpe")

    Joe.showOff() //Here's my new trick: Jumping ROpe
    
```
<br><br>
 Notice class coolguy has a constructor coolguy(). which is what we call. <Br>
 WE get an object back and can call that objects methods. new cool guy called joe has his own methods.<br><br>
 
 IN polymorphism a method name can have multiple definitions at different levels. Automatically selected as appropriate.
 Definitions for methods can polymorph depending on what level of inheritance you are referencing<br><br>
 
JavaScript doesnt support multiple inheritance. <br>
 
 Absolute reference needed to call inherited function<br>
 ie
 ```Vehicle.drive.call (this)```<br>
 should be avoided if you can!
<br><br>
Seems like classes are absolutely shit in JS( Could have told me that on one page though mate)

<h5>[[Proptotype]]</h5>
 
Objects have internal property called [[Prototype]] 
- just reference to a nother object.
- almost all given a non-null value at creation


```
var anotherObject = {
    a:2 
    };

// create an object linked to 'anotherObjectg'
var myObject = Object.create ( anotherObject );

myObject.a; // 2
```
will continue down the [[prototype]]chain until something is found. If nothing is found, return undefined<br>

Also in for in loop iteration, any property that can be reached will be enumerated.
Ie. if you use in operator to test for existence of a property on an object, it will check entire chain of object. regardless of enumerability):

```javascript
var anotherObject = {
    a:2
};
// create an object linked to 'anotherObject'
var myObject = Object.create(anotherObject);


for (var k in myObject) {
    console.log("found: " + k);
}
// found: a

("a" in myObject); //true
```

<h5>Object.prototype</h5>
Where does it end? THe built in object.prototype. Includes all common utilities are found from this.

<h5>Setting and SHadowing Properties</h5>

```myObject.foo = "bar";```

if myObject already has a normal accessor property called foo in it, the assignment is simple.

if not present, [[prototype]] chain is checked. like [[get]].
if foo is not found, it is added with the value.

if its present in the chain, some unexpected shit can happen.
if foo ends up on myObject and somewhere higher up, = shadowing.
foo on myObject shadows any higher foo. foo lookup always finds foo thats lowest.


In javascript no such thing as class. all instances are linked to a common object. so nothing is totally seperated. Can lead to fuck ups.

Object.create(...) is what we are looking for?!

No inhertiance in JS really. JS creates link between two objects wand delegate property and function access to another.

In JS a constructor is any function called with the new keyword in front of it.

function calls are constructor calls only if new is used.

<h5>Mechanics</h5>

JS developers are always trying to create class orientation tricks

```
function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

var a = new Foo( "a" );
var b = new FOo( "b" );


a.myName(); // "a"
b.myName(); // "b"
```

this.name = name adds the .name property onto each object (a and b) similar to how class instances encapsulate data values<Br>

2- FOo.prototype.myName = .... adds property(function) to the FOo.prototype.object. <BR>

[[prototype]] provides fallback lookup steps if property reference isnt found directly by [[get]]

a and b end up with an internal [[prototype]]  linkage to foo.prototype.j


