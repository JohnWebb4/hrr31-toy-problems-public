/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// Whiteboard
// I: Function and object
// O: Function bound to object
// C: None
// E: Empty Objects, arrays

// Breakdown
// Return new function
// Use call / apply to set context
// Set this context
// Set initial argument(s) context
// Whe returned function is called concat with initial arguments
// Call function

// More Whiteboard
// Parameters need function, this, initial parameters (Rest?)
// Return function that accepts arguments
// // Function concats initial arguments with passed arguments
// // Function calls apply with this context and concated arguments
// // Returns result

const bind = (func, objThis, ...initArgs) => (
  () => {
    const totalArgs = initArgs.concat(Array.from(arguments));
    return func.apply(objThis, totalArgs);
  }
);

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// Whiteboard
// Get this, and initial arguments (Rest)
// Return function that accepts arguments
// // Concat initial arguments with passed arguments
// // Call apply on outer function passing in this and arguments
// // Return result

Function.prototype.bind = function bindFunc(objThis, ...initArgs) {
  // Maintain context
  const context = this;
  return function boundFunc() {
    console.log('Arguments', arguments);
    const totalArgs = initArgs.concat(Array.from(arguments));
    return context.apply(objThis, totalArgs);
  };
};

try {
  module.exports = bind;
} catch (e) {
  // Loading webpage, ignore
}
