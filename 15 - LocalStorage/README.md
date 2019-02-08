# Local Storage

This tutorial shows how to use local storage to keep user data refresh-safe. This could be the first step for an `offline web application` syncing.

![Local Storage](../assets/img/15%20-%20LocalStorage.png?raw=true "Presentation Image")

## My contribution

As Wes challenged us, I have added buttons for clearing the list, checking and unchecking all the items.

## Learning notes

Some concepts taught:

- `Window.localStorage` property from the `Web Storage API`
- ternary operators in `ES6 template literals`
- parent-children `event delegation`
- `JSON.stringify()`
- `submit` event for forms

```javascript
// generating the HTML list elemnts
// we use a ternary operation for having the checked attribute checked
const populateList = function (plates = [], platesList) {
 platesList.innerHTML = plates.map((plate, idx) => {
   return `
     <li>
       <input type="checkbox" data-index=${idx} id="item${idx}" ${plate.done ? 'checked' : ''}/>
       <label for="item${idx}">${plate.text}</label>
     </li>
   `
 })
   .join('')
}

// saving data as 'items' to the localStorage map
localStorage.setItem('items', JSON.stringify(items))

// clearing a const array
items.splice(0, items.length)
```
