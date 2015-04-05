# rootrequire

Require files relative to your project root.

## Install

```
npm install --save rootrequire
```

## Usage

### Function

```javascript
var root = require('rootrequire');
var someLib = require(root('/lib/some-lib.js'));

console.log(root.path); // /path/to/your/project/dir
```

The leading directory separator is optional when using the `root` function e.g. the following are equivalent:

```javascript
var someLib = require(root('/lib/some-lib.js'));
var someLib = require(root('lib/some-lib.js'));
```

### Path

```js
var root = require('rootrequire').path;
var someLib = require(root + '/lib/some-lib.js');

console.log(root); // /path/to/your/project/dir
```

## Why?

* You can move files around more easily than you can with relative paths like `../../lib/my-lib.js`.
* Every file documents your app's directory structure for you. You'll know exactly where to look for things.
* Dazzle your coworkers.

## Learn JavaScript with Eric Elliott

This was written for the ["Learn JavaScript with Eric Elliott"](https://ericelliottjs.com) courses. Don't just learn JavaScript. Learn how to change the world.
