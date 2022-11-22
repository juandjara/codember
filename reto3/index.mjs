import { input } from './input.mjs'

const oldCounts = []
let currentCount = new Map()

input.forEach((color, index) => {
  const numCurrentColors = currentCount.size
  const breakForSameColor = color === input[index - 1]
  const breakForDifferentColor = numCurrentColors === 2 && !currentCount.has(color)

  if (breakForDifferentColor || breakForSameColor) {
    // reset the chain
    oldCounts.push(currentCount)
    currentCount = new Map()
  }

  if (!currentCount.has(color)) {
    currentCount.set(color, 0)
  }
  
  currentCount.set(color, currentCount.get(color) + 1)
})

const chains = ([...oldCounts, currentCount])
  .filter(group => group.size === 2)
  .map((group) => {
    const [color0, color1] = [...group.entries()]
    const chainLength = color0[1] + color0[1]
    const colors = [color0[0], color1[0]]
    return { chainLength, colors }
  }).reduce((acum, next) => {
    return next.chainLength > acum.chainLength ? next : acum
  })

console.log(chains)
