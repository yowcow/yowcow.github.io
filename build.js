const fs  = require('fs')
const pug = require('pug')
const program = require('commander')

program.version('0.0.1')
    .usage('[options]')
    .option('-i, --input [string]', 'input pug file', '')
    .option('-o, --output [string]', 'outout HTML file', '')
    .parse(process.argv)

if (!program.input.length || !program.output.length) {
  program.help()
  process.exit(0)
}

fs.writeFile(program.output, pug.renderFile(program.input, {}), err => {
  if (err) throw err
})
