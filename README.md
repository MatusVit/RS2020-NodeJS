# RS2020-NodeJS

repository for RSS-NodeJS 2020 course tasks

## Task 1. Caesar cipher CLI tool in branch 'caesar-cipher-cli'

@ About cli

---

## How to install

---

## How to use

CLI tool 4 options (short alias and full name): -s, --shift: a shift -i, --input: an input file -o,
--output: an output file -a, --action: an action encode/decode

- npm install (i used commander.js - external command-line interface)

- you can use command "node index.js --help" to se all list of commands

  -Options:

       -a, --action [type],     an action encode/decode
       -s, --shift <number>     a shift
       -i, --input <filename>   an input file
       -o, --output <filename>  an output file
       -h, --help               display help for command

- you can encode and decode right in STDIN and get STDOUT by passing only --action and --shift
  command

## Examples of usage

```bash
node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
node my_caesar_cli --action encode --shift 7 --input input.txt --output encode.txt
```

```bash
node my_caesar_cli --action decode --shift 7 --input input.txt --output decode.txt
```

> input.txt `***`

> output.txt `***`
