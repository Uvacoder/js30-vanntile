const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))

const getFirstChecked = () => {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return i
    }
  }
  return -1
}

const getLastChecked = () => {
  for (let i = checkboxes.length - 1; i > 0; i--) {
    if (checkboxes[i].checked) {
      return i
    }
  }
  return -1
}

/**
 * Check all in-between boxes
 */
const check = (s, e) => {
  for (let i = s; i <= e; i++) {
    checkboxes[i].checked = true
  }
}

let shiftSelect = function (e) {
  if (e.shiftKey && this.checked) {
    const current = checkboxes.indexOf(e.target)
    const firstChecked = getFirstChecked()
    const lastChecked = getLastChecked()

    if (firstChecked < current) {
      check(firstChecked, current)
    } else if (current < lastChecked) {
      check(current, lastChecked)
    }
  }
}

checkboxes.forEach(c => c.addEventListener('click', shiftSelect))
