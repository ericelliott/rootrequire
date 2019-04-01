/**
 * Require relative to your project home directory.
 */
/*

// Usage:
// Anywhere in your project:

// Function:

  var root = require('rootrequire');
  var someLib = require(root('/lib/some-lib.js'));
  console.log(root.path); // /path/to/your/project/dir

// Path:

  var root = require('rootrequire').path;
  var someLib = require(root + '/lib/some-lib.js');
  console.log(root); // /path/to/your/project/dir

*/

'use strict';

var path = require('path');
var $root = path.join(__dirname, '/../..');

function root ($path) {
  return path.join($root, $path);
}

root.path = $root;

module.exports = root;
