# RS2020-NodeJS

## Caesar cipher CLI tool

---

CLI tool that will encode and decode a text by Caesar cipher

## How to install

1. Download or clone this repository
   > git clone https://github.com/MatusVit/RS2020-NodeJS.git
   ###### in branch 'caesar-cipher-cli'
   > git checkout caesar-cipher-cli
2. Go to the app folder
   > cd caesar-cipher-cli'
3. Install dependencies
   > npm install

## How to use

Open command line in your computer, transfer to this project directory and run command

> node caesar-cli --action encode/decode --shift <number> --input <filename> --output <filename>

CLI tool 4 options (short alias and full name): Options: -a, --action [type], an action
encode/decode -s, --shift <number> a shift -i, --input <filename> an input file -o, --output
<filename> an output file

You can encode and decode right in STDIN and get STDOUT by passing only --action and --shift command

## Examples of usage

```bash
node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
node caesar-cli --action encode --shift 7 --input input.txt --output encode.txt
```

```bash
node caesar-cli --action decode --shift 7 --input input.txt --output decode.txt
```

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
