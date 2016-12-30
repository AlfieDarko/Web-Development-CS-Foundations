<h1>Chapter 3 Notes</h1>
Objects


Objects come in 2 forms. 
-Declarative (or literal) form
-Constructed form

Literal
'''
var myObj = {
key: value
/// ...
};
'''

Declarative
'''
var myObj = new Object();
myObj.key = value;
'''

More or less the same. Literal form is most commonly used.

Type
Six Primary Types (language types)
- string
- number
- boolean
- null
- undefined
- object
(string, boolean, number, bull and undefined) not themselves object.

function is a subtype of object.
- basically normal object, can be handled as such

Arrays
- form of object with extra behaviour.


Built-in Objects
-other object subtypes
- string
- number
- bool
- object
- function
- array
- date
- regexp
- error

can be used as a constructer thus = newly constructed object
for instance

'''
var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; //false

var strObject = new String ( "I am a string");
typeof strObject; // "object"
strObject instanceof String; // true

// inspect the object sub-type 
Object.prototype.toString.call ( strObject);
'''

"I am a string" is not an obhect. primitive literal + immutable value.
String object required to perform operations on it.
JS auto-convert to String object.

Consider
''
var strPrimitive = "I am a string";

console.log(strPrimitive.length); // 13
console.log( strPrimitive.charAt(3)); / "m"
''

both cases, property auto-coerce called  into a string object, same thing
happens with numbers.

null & undefined have no object wrapper form. 
date values have no literal form counterpart.

Objects, Arrays, FUnctions, all objects regardless. 


Contents
value stored implementation dependant way.
property references are stored in objects.

'''
var myObject = {
a:2
};

myObject.a; //2
myObject["a"]; //2
'''
.a and ["a"] access same location.
Property access/ key access respectively.

[""] = can take any type of format  ie h3llo! access ["h3llo! access"]
. cant do that, has to be normal var naming rules. 

Property names are always strings. 
-any number will be converted to string
 
 Computed Property Name.
 myobject[..] useful if you need to use computed expression value as he keyname
 ie myObject[prefix + name]
 es6 ADDS computed property names
 
 '''
 var prefix = "foo";
 
 var myObject = {
    [prefix + "bar"]: "hello",
    [prefix + "bar"]: "world"
 };
 
 myObject["foobar"]; // hello
 myObject["foobaz"]; // world
'''

function = method is JavaScript

Arrays

Slightly more structured. 
Numeric indexing
Values are stored in locations called indices.

'''
var myArray = [ "foo", 42, "bar" ];

myArray.length; //3

myArray[0]; // "foo"
myArray[2]; //"bar"
'''
Array also objects

'''
var myArray = [ "foo", 42, "bar"];
myArray.baz = "baz";
myArray.length; //3
myArray.baz; //"baz"
'''

''' 
var myArray = ["foo", 42, "bar" ];
myArray["3"] = "baz";
myArray.length; //4
myArray[3]; // "baz"
'''


Property Descriptors
Does what it says on the tin
'''
var myObject = {
a:2
};

Object.getOwnPropertyDescriptor (myObject, "a");

//{
//  value: 2,
//  writable: true,
//  enumerable: true,
//  configurable: true
//}

USe object.defineProperty(..) to add or modify propertie
characteristics
FOr example:

'''
var myObject = {};

Object.defineProperty(myObject, "a", {
value: 2, writable: true,
configurable: true,
enumerable: true
});
myObject.a //2
'''

can change peroperty to not writable and would silently fail. in strict mode, you would get a TypeError.


Configurable
As long as property is confugrable we can modify its definition. 
Using defineProperty(..)
'''
var myObject = {
a: 2
};

myObject.a = 3;
myObject.a; //3
Object.defineProperty( myObject, "a", {
value: 4, 
writable: true,
configurable: false, // not configurable!
enumerable: true
});

myObject.a; //4
myObject.a = 5;
myObject.a; // 5

Object.defineProperty( myObject, "a", {
value: 6,
writable: true,
configurable: true,
enumerable: true
}); //TypeError

'''
if writable is changed to false, you cant change it back.
Also cant delete if nonconfigurable.

Enumerable. 
controls whether property will show up in enumeration like in loops.
if false, it will not show up.

Immutability
All previous approaches create shallow immutability.
if object has reference to another object, can still be mutated

'''
myImmutableObject.foo; // [1,2,3]
myImmutableObject.foo.push(4);
myImmutableObject.foo; // [1,2,3,4]
'''

writable and configurable = false.
You can create a constant.

Prevent extensions
Provent an object from having new properies added
Object.preventExtensions(..)

'''
var myObject = { 
a:2};

Object.preventExtensions (myObject);

myObject.b = 3;
myObject.b; // undefined
'''
Seal.
PreventExtensions + configurable: false

Object.seal(...)

Freeze 
object.freeze(...)
configurable + writable false


GET AND SET
OV

'''
var myObject = {
// define a getter for 'a'
get a() {
return 2;
    }
};

Object.defineProperty(
myObject,   // target
"b",        //property name
{           // descriptor
            // define a getter for 'b'
get: function() { return this.a * 2},

// make sure 'b' shows up as an object property
enumerable: true
    }
);

myObject.a; //2
myObject.b; //4
'''
'''
var myObject = {
    // define a getter for 'a'
    get a() {
    return this._a_;
    },
    
    // define a setter for 'a'
    set a(val) {
    this._a_=val * 2;
    
    }
};

myObject.a = 2;
myObject.a; // 4
'''
.

Existence

You can check if object has a certain property without asking to get that property.
'''
var myObject = {
a: 2
};

("a" in myObject); // true
("b" in myObject); // false

myObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("b"); // false

'''

in checks if property is in the object. also checks prototype chain.
hasOwnProperty doesnt check prototype chain.


Enumeration.
Basically makes property visible or non visible to for loops
'''
var myObject = {};

Object.defineProperty(
myObject,
"a",
// make 'a' enumerable as normal
{ enumerable: true, value: 2}
);
'''

can also be set with defineProperty
.
Object.keys(...) returns array of all enumerable properties.
Object.getOwnPropertyNames(...) returns array of all properties in object, enumerable or not.

Iteration. 
Same as C#. 

forEach(...) iterates over all values in array, ignore any callback return values.

every(...) keeps going until end or callback returns false value. 
some(...) keeps going until the end or callback returns a true or truthy.

Iterate over values directly instead of array index?

'''
var myArray = [1,2,3 ];

for (var v of myArray) {
console.log ( v );
}
// 1
// 2
// 3
'''

Possible to define own defauly @@iterator.

Can iterate for ever. or produce random values 100 times ie.

''' 
var randoms = {
[Symbol.iterator]: function() {
return{
next: function/() {
return { value: Math.random() };
}
};
}
};

var randoms_pool = [];
for (var n of randoms) {
randoms_pool.push(n);

// don't proceed unbounded!
if (randoms_pool.length === 100) break;
}
'''

