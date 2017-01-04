/*
Write a program that, given a DNA strand, returns its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and thymine (**T**).

The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and uracil (**U**).

Given a DNA strand, its transcribed RNA strand is formed by replacing
each nucleotide with its complement:

* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
*/

/*
Your ECMAScript solution for Rna Transcription has been submitted. View it here:
http://exercism.io/submissions/2a6b1574256f407b8366b04cb18e56b4

See related solutions and get involved here:
http://exercism.io/tracks/ecmascript/exercises/rna-transcription
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Transcriptor = (function () {
  function Transcriptor() {
    _classCallCheck(this, Transcriptor);
  }

  _createClass(Transcriptor, [{
    key: 'toRna',
    value: function toRna(dna) {
      var dnaArray = Array.from(dna);
      var rna = [];
      var mapOut = dnaArray.map(function (nucleotide) {
        if (nucleotide == 'G') rna.push('C');else if (nucleotide == 'C') rna.push('G');else if (nucleotide == 'T') rna.push('A');else rna.push('U');
      });
      return rna.join('');
    }
  }]);

  return Transcriptor;
})();

exports['default'] = Transcriptor;
module.exports = exports['default'];