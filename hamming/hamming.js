/*
Your ECMAScript solution for Hamming has been submitted. View it here:
http://exercism.io/submissions/564bd1b040c5419097473596a4c64cef

See related solutions and get involved here:
http://exercism.io/tracks/ecmascript/exercises/hamming
*/

class Hamming {

  compute(strand1, strand2) {
      let count = 0;
      if(strand1.length !== strand2.length) throw new Error('DNA strands must be of equal length.');
      else
      for(let i = 0; i < strand1.length; i++) {
        if(strand1[i] !== strand2[i]) count ++
      }
      return count;
  }
}
export default Hamming;
