const divs = document.querySelectorAll('div')

const logText = function (e) {
  console.log(this.classList.value)
  // stop bubbling the event up
  //e.stopPropagation()
}

divs.forEach(div => div.addEventListener('click', logText, {
  // run the function on the capture down
  // capture: true
  // unbind the event for further clicks
  once: true
}))
