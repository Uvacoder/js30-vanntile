function debounce (func, wait = 20, immediate = true) {
  var timeout
  return function () {
    var context = this

    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const sliderImages = document.querySelectorAll('.slide-in')

const checkSlide = function (e) {
  sliderImages.forEach(img => {
    // halfway through te image
    const slideInAt = window.scrollY + window.innerHeight - img.height / 2
    // bottom of the image
    const imageBottom = img.offsetTop + img.height

    if (slideInAt > img.offsetTop && window.scrollY < imageBottom) {
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))
