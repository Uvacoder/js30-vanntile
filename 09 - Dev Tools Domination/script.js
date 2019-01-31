const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}]

const p = document.querySelector('p')

let makeGreen = function () {
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}

// Regular
console.log('Hello!')

// Interpolated
console.log('Hello I am %s string!', '@vanntile')

// Styled
console.log('%c I am some great text', 'background:blue; color:white')

// warning!
console.warn('WARNING')

// Error :
console.error('ERROR')

// Info
console.info('Information probably not useful')

// Testing
console.assert(1 === 2, 'This assertion should be useful for tests')

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(x => {
  console.groupCollapsed(`${x.name}`)
  console.log(`First computation ${x.name}`)
  console.log(`Second computation ${x.age}`)
  console.groupEnd(`${x}`)
})

// counting

console.count('VannTile')
console.count('VannTile')
console.count('Ianito')
console.count('VannTile')
console.count('VannTile')
console.count('Ianito')
console.count('Ianito')
console.count('VannTile')
console.count('VannTile')
console.count('Ianito')

// timing
console.time('fetching data')
window.fetch('https://api.github.com/users/vanntile')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })
