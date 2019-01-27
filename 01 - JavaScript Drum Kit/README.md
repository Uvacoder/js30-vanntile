# JavaScript Drum Kit
The initial tutorial shows how to create a music keyboard by adding `keydown`
events on `audio` elements. My own contribution is adding beat repetition
functionality.

![Drum Kit Presentation](../assets/img/01%20-%20JavaScript%20Drum%20Kit.png?raw=true "Presentation Image")

## How to use
 - use the displayed keys to play the sounds
 - click on the boxes to set a rhytm, adding repetition on the first, first two,
 or all three measures (each with a distinctive color)

## Learning notes
Some concepts thaught:
 - ES6 `template literals`
 - `transitioned` event
 - `audio` element API
 - use of the `data` attribute for custom element data
 - use of `querySelector` to get a `NodeList`

```javascript
// remove the event class after transform is finished
keys.forEach(
  key => key.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') return

    ['playing', 'playing-1', 'playing-2', 'playing-3'].forEach(
      c => e.target.classList.remove(c)
    )
  })
)
```

```javascript
// detect keydown key code
document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add('playing')
```
