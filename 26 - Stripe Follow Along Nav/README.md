# Stripe Follow Along Nav

This tutorial shows how to build a link navigator `micro-animation` UI element like Stripe's.

![Stripe Follow Along Nav](../assets/img/26%20-%20Stripe%20Follow%20Along%20Nav.png?raw=true "Presentation Image")

## How does it work

It mixes JavaScript and CSS to transition a tooltip background behind a
navigation dropdown list. The dropdown element has two events for transitions,
`.trigger-enter` and `.trigger-enter-active`, while the tooltip has only an
`.open` transition.

```CSS
/* dropdown list */
.trigger-enter .dropdown {
  display: block;
}

.trigger-enter-active .dropdown {
  opacity: 1;
}

/* tooltip */
.dropdownBackground.open {
  opacity: 1;
}
```

## Learning notes

Some concepts taught:

 - revisioning `getBoundingClientRect()` which returns a `DOMRect` with an objects complete bounding box coordinates
 - setting properties with `ES6 template literals`
 - `event` delegation and order

```javascript
// set the second class after a delay only if the first has not been removed
this.classList.add('trigger-enter')
setTimeout(() =>
  this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
```
