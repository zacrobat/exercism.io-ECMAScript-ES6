const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

class Transcriptor {

  toRna(strand) {

    const inputValidation = new RegExp(/[^GCAT]/)

    if(inputValidation.test(strand)) throw new Error('Invalid input DNA.')

    return strand.split('').map(nucleotide => dnaToRna[nucleotide]).join('')
  }

}

export default Transcriptor
