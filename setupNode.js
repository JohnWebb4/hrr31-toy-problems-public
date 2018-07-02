/**
 * @file Setup file for Server Tests
 * @author John Webb
 */
const dotEnv = require('dotenv').config();

// Set global variables in browser
global.window = {};
Object.entries(dotEnv.parsed).forEach(([key, value]) => {
  global.window[key] = value;
});

/**
 * @module Configuration variables
 */
export default dotEnv.parsed;
