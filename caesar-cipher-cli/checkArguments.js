const { closeWithError } = require('./utils');

const checkArguments = (argv) => {
  const { action, shift, input, output } = argv;
  // console.log('action:', action);

  if (!action) {
    closeWithError('Invalid option. Please, enter option "active" (--action or -a)');
  }

  if (action !== 'encode' && action !== 'decode') {
    closeWithError('Invalid option. "action" must be "encode" or "decode"');
  }

  //todo check others

  return true;
};

module.exports = checkArguments;
