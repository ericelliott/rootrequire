/**
 * Require relative to your project home directory.
 */
/*

// Usage:
// Anywhere in your project:

var root = require('root'),
  someLib = require(root + '/lib/some-lib.js');

console.log(root); // /path/to/your/project/dir

*/

'use strict';

var path = require('path');

module.exports = path.resolve(__dirname + '/../..');

