// no way to polyfill new syntax. Use tools that convert new code into older equivalents.
//

// quick example of ES6 feature called "default parameter values."

function foo(a=2) {
    console.log(a);
}
foo(); //2
foo(42); //42

// New syntax invalid in pre ES6 engines. 
// Transpiler example 

function foo() {
    var a = arguments [0] !== (void 0) ? arguments[0] : 2;
    console.log(a);
}

// checks to see if arguments[0] value is void 0 (undefined) and if so, provides the 2 default valuel else it assigns whatever is passed.

// the transpiled code explains intended behaviour more clearly

//(Perhaps you didnt know that that undefined cant get explicitly passed)

//Should be thought of as a standard part of JS development ecosystem and process.

// Ie. Babel (formerly 6to5)
//Tramspiles ES6+ into ES5

// Traceur
// Transpiles ES6, ES7 & beyond into ES5