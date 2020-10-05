const fs = require('fs');
const { closeWithError } = require('./utils');

const minimist = require('minimist');
const { pipeline } = require('stream');
const CipherTransformer = require('./CipherTransformer');
const checkArguments = require('./checkArguments');

const argv = minimist(process.argv.slice(2), {
  alias: {
    a: 'action',
    s: 'shift',
    i: 'input',
    o: 'output',
  },
});

if (checkArguments(argv)) {
  const { action, shift, input, output } = argv;
  // console.log(`action:${action}, shift:${shift}, input:${input}, output:${output}`);

  let shiftVector = shift;
  if (action === 'decode') shiftVector *= -1;
  // console.log('shiftVector: ', shiftVector);

  const inputStream = input ? fs.createReadStream(input) : process.stdin;
  const outputStream = output ? fs.createWriteStream(output, { flags: 'a+' }) : process.stdout;
  const cipherTransformer = new CipherTransformer(shiftVector);

  pipeline(inputStream, cipherTransformer, outputStream, (error) => {
    if (error) {
      closeWithError(error.message);
    } else console.log('Done!');
  });
} else {
  closeWithError('No required arguments passed.');
}
