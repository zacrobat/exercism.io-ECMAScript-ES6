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

class Transcriptor {

  toRna(dna) {
    let dnaArray = Array.from(dna);
    let rna = [];
    let mapOut = dnaArray.map(function(nucleotide){
      if(nucleotide == 'G') rna.push('C')
      else if(nucleotide == 'C') rna.push('G')
      else if(nucleotide == 'T') rna.push('A')
      else rna.push('U')
    });
    return rna.join('');
  }

}

export default Transcriptor;
