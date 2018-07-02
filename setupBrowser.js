/**
 * @file Setup file for Server Tests
 * @author John Webb
 */

// Set global variables in browser
Object.entries(process.env).forEach(([key, value]) => {
  window[key] = value;
});

/**
 * @module Configuration variables
 */
export default process.env;
