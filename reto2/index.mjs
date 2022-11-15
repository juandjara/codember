import input from './input.mjs'

const words = input.split(' ')
const result = []
for (const w of words) {
  let decodedWord = ''
  const nums = w.split('')
  let currentChar = ''
  for (const n of nums) {
    currentChar += n
    if (Number(currentChar) >= 97) {
      decodedWord += String.fromCharCode(currentChar)
      currentChar = ''
    }
  }
  result.push(decodedWord)
}

console.log(result.join(' '))
