# Custom Video Player

This tutorial shows how to create a custom video player.

![11 - Custom Video Player](../assets/img/11 - Custom Video Player.png)

## My contribution

As Wes challenged us, I have added fullscreen video functionality. The only issue to pay attention to was choosing the `player` element instead of `video` to keep the controls on screen.

## Learning notes

Some concepts taught:

- `HTMLMediaElement API` for
  -  `click`, `play`, `pause` and `timeupdate` events
  - `volume`, `playbackRate` and `currentTime` properties
- `Fullscreen API` for the `requestFullscreen()` method

```javascript
// fullscreen handler function
const handleFullscreen = () => {
  if (!document.fullscreenElement) {
    player.requestFullscreen()
      .catch(err =>
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      )
  } else {
    document.exitFullscreen()
  }
}
```