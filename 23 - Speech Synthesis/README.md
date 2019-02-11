# Speech Synthesis

This tutorial shows how to use the `Web Speech API` to create a speech synthesiser.

![Speech Synthesis](../assets/img/23%20-%20Speech%20Synthesis.png?raw=true "Presentation Image")

## My contribution

The implementation didn't work as intented (probably because the browser API
implementation changed meanwhile) and when the parameters changed or the start
button was clicked  it didn't play the utterance. The queue didn't take the same
utterance twice, so I created a new utterance for each time play time.

## Learning notes

Some concepts taught:

 - `SpeechSynthesis` from `Web Speech API`
 - `SpeechSynthesisUtterance` properties like `voice, pitch, rate, text`
 - `Array.filter`

```javascript
// mapping the voices to dropdown options
voices = synth.getVoices()
voicesDropdown.innerHTML = voices
  .filter(v => v.lang.includes('en'))
  .map(voice =>
    `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
  )
  .join('')

// create a new utterance
const utterance = new SpeechSynthesisUtterance(text.value)
```
