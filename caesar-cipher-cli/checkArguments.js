const { closeWithError } = require('./utils');
const fs = require('fs');

const checkFile = (path) => {
  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch (err) {
    closeWithError(`File "${path}" is not access`);
  }
};

const checkArguments = (argv) => {
  const { action, shift, input, output } = argv;

  if (!action) {
    closeWithError('Invalid option. Please, enter option "active" (--action or -a)');
  }

  if (action !== 'encode' && action !== 'decode') {
    closeWithError('Invalid option. "action" must be "encode" or "decode"');
  }

  if (!shift) {
    closeWithError('Invalid option. Please, enter option "shift" (--shift or -s)');
  }

  if (!Number.isInteger(+shift)) {
    closeWithError('Invalid option. "shift" must be an integer');
  }

  if (input) {
    checkFile(input);
  }

  if (output) {
    checkFile(output);
  }

  return true;
};

module.exports = checkArguments;
