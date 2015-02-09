# rootrequire

Require files relative to your project root. Why?

* You can move files around more easily than you can with relative paths like `../../lib/my-lib.js`
* Every file documents your app's directory structure for you. You'll know exactly where to look for things.
* Dazzle your coworkers.


## Learn JavaScript with Eric Elliott

This was written for the ["Learn JavaScript with Eric Elliott](https://ericelliottjs.com) courses. Don't just learn JavaScript. Learn how to change the world.


## Install

```
npm install --save rootrequire
```

## Use

```js
var
  root = require('rootrequire'),
  myLib = require(root + 'path/to/lib.js');
```
