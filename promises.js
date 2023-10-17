const fs = require('node:fs/promises')

fs.readFile('test.txt', 'utf8').then((text) => {
  console.log(text)
})

fs.readFile('secondTest.txt', 'utf8').then((text) => {
  console.log(text)
})
