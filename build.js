const fs  = require('fs')
const pug = require('pug')

fs.writeFile('./index.html', pug.renderFile('./src/index.pug', {}), err => {
  if (err) throw err
})
