const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')
const text = document.querySelector('[name="text"]')
const synth = window.speechSynthesis
let voices = []

const populateVoices = () => {
  voices = synth.getVoices()
  voicesDropdown.innerHTML = voices
    .filter(v => v.lang.includes('en'))
    .map(voice =>
      `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join('')
}

const speak = () => {
  const utterance = new SpeechSynthesisUtterance(text.value)

  utterance.voice = voices.find(voice => voice.name === voicesDropdown.value)
  options.forEach(o => (utterance[o.name] = o.value))

  synth.speak(utterance)
}

const changeVars = (doSpeak = true) => {
  synth.cancel()
  if (doSpeak) {
    speak()
  }
}

populateVoices()
speakButton.addEventListener('click', speak)
stopButton.addEventListener('click', changeVars.bind(null, false))
options.forEach(o => o.addEventListener('change', changeVars))
voicesDropdown.addEventListener('change', changeVars)
