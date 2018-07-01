/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

// Whiteboard
// I: Object to extend
// O: Input object extended with on and trigger
// C: No space/time complexity. See Caveats.
// E: Multiple listeners for same event.

// Breakdown
// Declare events object in obj to hold all events
// Declare on function in obj
// Declare trigger event in obj
// Return obj


// On functon
// I: event name, and callback (accepts no arguments)
// O: None
// C: None
// E: Adding multiple listeners to same callback

// Breakdown on
// // If events does not exit, create empty object
// // If event name exists as ken in events, push callback
// // Else create array with callback as first element

// Trigger event
// I: event name
// O: None
// C: None
// E: Call all listeners for callback

// Breakdown trigger
// // If events doesn't exist return
// // If event name does not exit in events return
// // Get array at event name
// // Iterate through array and call listener callback

const mixEvents = (obj) => {
  obj.events = {};

  obj.on = function on(eventName, callback) {
    this.events = this.events || {};
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  };

  obj.trigger = function trigger(eventName, ...restArgs) {
    if (!this.events) {
      return;
    }

    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach((callback) => {
      callback.apply(this, restArgs);
    });
  };

  return obj;
};

if (process.env.DEBUG) {
  module.exports = mixEvents;
}
