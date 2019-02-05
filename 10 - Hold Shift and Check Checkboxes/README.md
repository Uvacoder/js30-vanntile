# Hold Shift and Check Checkboxes

This tutorial shows how to create a `shift select` checkbox list.

![Hold Shift and Check Checkboxes](../assets/img/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes.png?raw=true "Presentation Image")

## My implementation

I have changed the two-variable Implementation of Wes into a three-variable one because I had a different experience with a feature like this. The `user experience` I usually have with **select-shift** is the following: I want to select everything from the most top selected or the most bottom one to the **shift-click** target.

## Learning notes

Some concepts taught:

- `e.shiftKey` event

```javascript
/**
 * Check all in-between boxes
 */
const check = (s, e) => {
  for (let i = s; i <= e; i++) {
    checkboxes[i].checked = true
  }
}
```
