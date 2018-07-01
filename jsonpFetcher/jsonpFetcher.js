/**
 * Implement a function that takes a URL and a callback and makes a JSONP
 * GET request to that URL.
 *
 * We've provided the following API endpoint:
 *   http://toy-problems.hackreactor.com/jsonparty
 *
 * Your function should accept a call with that URL, and call the callback
 * with the response data from the server. You should NOT return the response
 * from the server, only the wrapped data! jQuery is not available, and you won't
 * be able to do this using a native XMLHttpRequest.
 *
 * Example:
 *   jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
 *     console.log(data.response); // "Aw yeah, now we're JSONPartying"
 *     console.log(data.random); // 3558
 *   });
 *
 *   // Subsequent requests should have properly random responses:
 *   jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
 *     console.log(data.random); // 1733
 *   });
 *
 * Hint: The API accepts a `callback` parameter. What is that for?
 * See http://en.wikipedia.org/wiki/JSONP if you need more information
 * about this exciting AJAX protocol!
 *
 * Feel free to use Google in searching for your ideal implementation!
 */

// Whiteboard
// What is JSONP? Json with padding.
// How do I initiate a jsonp request?
// // Can't use Jquery
// // Can't use XMLHttpRequest
// // Need to add script tag to body.
// // // Set script source to url
// // // Supply callback ?callback=...

// Callback Structure
// O: None.
// I: jsonp data
// C: None.
// E: No data.

// JsonpRequest Structure
// O: None. Runs callback on request complete
// I: Url to call, and callback function to run on complete
// C: None
// E:

// Breakdown
// Create script tag in document and store DOM object
// Set script source with query callback set to callback
// Append script tag to document

const jsonpRequest = (url, callback) => {
  const script = document.createElement('script');

  script.src = `${url}?callback=callback`;

  window.callback = callback;
  document.getElementsByTagName('html')[0].appendChild(script);
};

if (process.env.DEBUG) {
  module.exports = jsonpRequest;
}
