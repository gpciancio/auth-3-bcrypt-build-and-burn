const bcrypt = require('bcrypt');


function hash(plaintext) {
  let scramble = bcrypt.hashSync(plaintext, 8);
  return scramble;
}

function compare(plaintext, hash) {
  return bcrypt.compareSync(plaintext, hash);
}

module.exports = {
  hash, compare
};
