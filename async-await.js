const { readFile } = require('node:fs/promises')

// IIFE - Immediately Invoked Function Expression
;(async () => {
  console.log('Reading first file')
  const text = await readFile('test.txt', 'utf-8')
  console.log('first file', text)
  console.log('Doing things while reading file')
  console.log('Reading secondfile file')
  const secondFile = await readFile('secondTest.txt', 'utf-8')
  console.log('second file', secondFile)
})()
