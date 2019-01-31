# Type Ahead

This tutorial shows how to `filter data` for a quick search type ahead.

![06 - Type Ahead](../assets/img/06 - Type Ahead.png)

## Learning notes

Some concepts taught:

- managing `Promises` with `fetch`
- `ES6 aray spreading`
- `RegEx` string filter
- using `Array.prototype.map` to turn data into **HTML** nodes
- inserting generated nodes with `element.innerHTML`

```javascript
// turn matched data to a node and then joining it to a string

const html = matchArr.map(place => {
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

    return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
    `
}).join('')
```



