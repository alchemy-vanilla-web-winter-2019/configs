/* eslint-disable */

/* uncomment for DOM api support
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
global.window = window;
global.document = window.document;
*/

require = require('esm')(module);
module.exports = require("./tests.js");

