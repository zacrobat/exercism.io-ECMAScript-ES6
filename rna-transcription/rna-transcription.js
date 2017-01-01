class Transcriptor {

// removed 'function' from function toRna(...)

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
