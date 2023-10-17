const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('test.txt', 'utf-8'),
  readFile('secondTest.txt', 'utf-8')
]).then(([text, secondFile]) => {
  console.log('first file', text)
  console.log('second file', secondFile)
})
