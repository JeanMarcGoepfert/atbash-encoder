'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.encode = encode;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var rAlphabet = alphabet.slice(0).reverse();

function encode(words) {
  return words.replace(/\W/g, '').toLowerCase().split('').reduce(function (acc, val, ind) {

    return acc += alphabet.indexOf(val) >= 0 ? rAlphabet[alphabet.indexOf(val)] : val;
  }, '').replace(/(.{5})/g, '$1 ').trim();
}