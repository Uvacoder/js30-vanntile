const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
let countdown

const timer = (seconds) => {
  // clear existing interval
  clearInterval(countdown)

  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)

    // check if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }

    // display
    displayTimeLeft(secondsLeft)
  }, 1000)
}

const displayTimeLeft = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  seconds = seconds % 3600
  const minutes = Math.floor(seconds / 60)
  const secondsLeft = seconds % 60
  const display = `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
  timerDisplay.textContent = display
  document.title = display
}

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp)
  const mins = end.getMinutes()
  endTime.textContent = `Be back at ${end.getHours()}:${mins < 10 ? '0' : ''}${mins}`
}

buttons.forEach(button => button.addEventListener('click', function () {
  timer(parseInt(this.dataset.time))
}))

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})
