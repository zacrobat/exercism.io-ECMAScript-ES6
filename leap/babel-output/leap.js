"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {
  return year % 4 == 1 && year % 100 !== 0 || year % 400 == 0;
};

exports["default"] = isLeapYear;
module.exports = exports["default"];