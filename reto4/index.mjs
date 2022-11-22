const MIN = 11098
const MAX = 98123

const length = MAX - MIN
const nums = Array.from({ length }).fill(0).map((_, i) => MIN + i)

const valid = []
for (const num of nums) {
  if (num === 11500) {
    debugger
  }
  const txt = String(num)
  const contains5 = txt.includes("5")
  if (contains5) {
    const hasTwoFives = txt.split('').filter(c => c === '5').length >= 2
    const [c1, c2, c3, c4, c5] = txt.split('')
    const incrementing = c1 <= c2 && c2 <= c3 && c3 <= c4 && c4 <= c5
    if (hasTwoFives && incrementing) {
      valid.push(num)
    }
  }
}

console.log(valid.length, valid[55])
