const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const rAlphabet = alphabet.slice(0).reverse();

export function encode(words) {
  return words.replace(/\W/g, '').toLowerCase().split('').reduce((acc, val, ind) => {

    return acc += alphabet.indexOf(val) >= 0 ? rAlphabet[alphabet.indexOf(val)] : val;

  }, "").replace(/(.{5})/g,"$1 ").trim();
}
