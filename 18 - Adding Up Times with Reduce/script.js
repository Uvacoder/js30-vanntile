const times = Array.from(document.querySelectorAll('[data-time]'))
const seconds = times.map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':')
      .map(parseFloat)
    return (mins * 60) + secs
  })
  .reduce((total, seconds) => total + seconds, 0)

const hours = Math.floor(seconds / 3600)
let secondsLeft = seconds % 3600
const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

console.log(hours + ':' + mins + ':' + secondsLeft)
