const fs = require('node:fs')

const stats = fs.statSync('test.txt')

//console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink())

// Reading first file
fs.readFile('test.txt', 'utf8', (err, text) => {
  console.log(text)
})

fs.readFile('secondTest.txt', 'utf8', (err, text) => {
  console.log(text)
})
