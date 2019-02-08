const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []
const clearItemsBtn = document.querySelector('.clear-items')
const clearSelectionBtn = document.querySelector('.clear-selection')
const selectAllBtn = document.querySelector('.select-all')

/*
 * We want a reusable function
 */
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

const addItem = function (e) {
  e.preventDefault()

  const text = (this.querySelector('[name=item]'))
    .value
  const item = {
    text,
    done: false
  }

  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))

  this.reset()
}

const toggleDone = function (e) {
  if (!e.target.matches('input')) return

  const idx = e.target.dataset.index
  items[idx].done = !items[idx].done

  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)

// Get previous items
populateList(items, itemsList)

itemsList.addEventListener('click', toggleDone)

clearItemsBtn.addEventListener('click', () => {
  items.splice(0, items.length)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
})

clearSelectionBtn.addEventListener('click', () => {
  items.forEach(i => i.done = false)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
})

selectAllBtn.addEventListener('click', () => {
  items.forEach(i => i.done = true)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
})
