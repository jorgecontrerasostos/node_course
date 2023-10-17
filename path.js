const path = require('node:path')

console.log(path.sep)

// Join routes
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Get base name
const baseName = path.basename(filePath)
console.log(baseName)

const filename = path.basename(filePath, '.txt')
console.log(filename)

// Extension
const extension = path.extname(filePath)
console.log(extension)
