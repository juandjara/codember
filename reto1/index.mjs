import usersTXT from './users.mjs'

const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
const users = usersTXT
.split('\n\n')
.map(u => 
  Object.fromEntries(u
    .split('\n')
    .map(p => p.split(' '))
    .flat()
    .filter(Boolean)
    .map(u => u.split(':')))
)

let  validCount = 0
let  validUser = ''

for (const user of users) {
  let valid = true
  for (const key of KEYS) {
    if (!(key in user)) {
      valid = false
    }
  }
  if (valid) {
    validCount++
    validUser = user.usr
  }
}

console.log('validCount', validCount)
console.log('validUser', validUser)
