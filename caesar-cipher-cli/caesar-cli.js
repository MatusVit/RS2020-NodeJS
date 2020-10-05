const { log } = require('console');
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
  console.log(`action:${action}, shift:${shift}, input:${input}, output:${output}`);

  let shiftVector = shift;
  if (action === 'decode') shiftVector *= -1;
  console.log('shiftVector: ', shiftVector);

  const inputStream = process.stdin;
  const outputStream = process.stdout;
  const cipherTransformer = new CipherTransformer(shiftVector);

  pipeline(inputStream, cipherTransformer, outputStream, (error) => {
    if (error) console.error(error.message);
    else console.log('Done!');
  });
}
