const beatPeriod = 1000
const tempoKeys = (new Array(9)).fill(0)
const keys = Array.from(document.querySelectorAll('.key'))
const audios = Array.from(document.querySelectorAll('audio'))

let beat = 1
let tempo = () => {
  tempoKeys.forEach((key, idx) => {
    // if the current key is set, play it if it matches the beat
    if (key >= beat) {
      keys[idx].classList.add('playing-' + beat)
      audios[idx].currentTime = 0
      audios[idx].play()
    }
  })

  beat = beat % 3 + 1
}

Array.from(document.querySelectorAll('.key-container')).forEach(
  (container, idx) => container.addEventListener('click', () => {
    const spans = container.querySelectorAll('.key-repeat span')
    let i = tempoKeys[idx]

    // update key
    if (i !== 0) {
      spans[i - 1].classList.remove('active')
    }

    if (i !== 3) {
      spans[i].classList.add('active')
      // set key
      tempoKeys[idx]++
    } else {
      // reset key
      tempoKeys[idx] = 0
    }
  })
)

keys.forEach(
  key => key.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') return

    ['playing', 'playing-1', 'playing-2', 'playing-3'].forEach(
      c => e.target.classList.remove(c)
    )
  })
)

window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()

  document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add('playing')
})
window.setInterval(tempo, beatPeriod)
