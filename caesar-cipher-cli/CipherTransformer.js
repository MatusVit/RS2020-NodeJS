const { Transform } = require('stream');
const cipher = require('./cipher');

class CipherTransformer extends Transform {
  constructor(shift) {
    super();
    this.shift = shift;
  }

  _transform(data, encoding, callback) {
    this.push(cipher(data.toString('utf8'), this.shift));
    callback();
  }
}

module.exports = CipherTransformer;
