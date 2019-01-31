# Flex Panel Gallery
The initial tutorial shows how to create a `flexbox` based UI.

![Flex Panel Gallery](../assets/img/05%20-%20Flex%20Panel%20Gallery.png?raw=true "Presentation Image")

## My contribution
I have changed both the UI and the UX by removing the cursive font, adding a
grayscale filter and modifying the event interactions. Before, you could have
multiple panels open in the same time, getting less of each subsequent
transition. Now you can only have the last panel you clicked open, increasing
the flow adding focus in every state. Adding greyscale puts further accent on
the currnt panel.

## Learning notes
Some concepts taught:
 - CSS3 `flexbox` layout and nested flexbox
 - timing css events
 - JavaScript class toggle logic

```javascript
// remove the open class on all the others and toggle on current
var toggleOpen = function () {
  if (!this.classList.contains('open')) {
    panels.forEach(panel => {
      panel.classList.remove('open')
      panel.classList.remove('open-active')
    })
    this.classList.toggle('open')
  } else {
    panels.forEach(panel => {
      panel.classList.remove('open')
      panel.classList.remove('open-active')
    })
  }
}
```

