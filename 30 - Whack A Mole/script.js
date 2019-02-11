const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const title = document.querySelector('.title')
const moles = document.querySelectorAll('.mole')
const startButton = document.querySelector('button')

const min = 200 // minimum time in miliseconds
const max = 1000 // maximum time in miliseconds
const duration = 20 // maximum game time in seconds

let lastHole
let timeUp = true
let score

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const randomHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]

  if (hole === lastHole) {
    return randomHole(holes)
  }

  lastHole = hole
  return hole
}

const peep = () => {
  const time = randomTime(min, max)
  const hole = randomHole(holes)

  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')

    if (!timeUp) {
      peep()
    } else {
      title.textContent = 'Your score is'
    }
  }, time)
}

const startGame = () => {
  score = 0
  scoreBoard.textContent = 0
  title.textContent = 'Whack-a-mole!'
  timeUp = false

  peep()
  setTimeout(() => {
    timeUp = true
  }, (duration * 1000))
}

const bonk = function (e) {
  if (!e.isTrusted) return

  score++
  this.classList.remove('up')
  scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk))
moles.forEach(mole => mole.addEventListener('touchstart', bonk))

startButton.addEventListener('click', () => timeUp && startGame())
