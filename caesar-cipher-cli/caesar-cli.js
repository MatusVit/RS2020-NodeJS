const minimist = require('minimist');
const { pipeline } = require('stream');
const CipherTransformer = require('./CipherTransformer');

const argv = minimist(process.argv.slice(2), {
  alias: {
    a: 'action',
    s: 'shift',
    i: 'input',
    o: 'output',
  },
});

//todo checkArguments(argv);

const { action, shift, input, output } = argv;
console.log(`action:${action}, shift:${shift}, input:${input}, output:${output}`);

const inputStream = process.stdin;
const outputStream = process.stdout;
const cipherTransformer = new CipherTransformer(3);

pipeline(inputStream, cipherTransformer, outputStream, (error) => {
  if (error) console.error(error.message);
  else console.log('Done!');
});
