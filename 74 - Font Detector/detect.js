const families = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'];
const famLen = families.length;
const { body } = document;
const width = [];
const height = [];
const span = document.createElement('span');

span.innerHTML = 'AaBbCcWwLl:/!@';
span.style.fontSize = '100px';

for (let i = 0; i < famLen; i++) {
  span.style.fontFamily = families[i];
  body.appendChild(span);
  width[i] = span.offsetWidth;
  height[i] = span.offsetHeight;
  body.removeChild(span);
}

function detect(font) {
  let detected = false;
  for (let i = 0; i < famLen; i++) {
    span.style.fontFamily = `"${font}" ,${families[i]}`;
    body.appendChild(span);
    if (span.offsetWidth !== width[i] || span.offsetHeight !== height[i]) {
      detected = true;
    }
    body.removeChild(span);
  }
  return detected;
}

fetch('./fonts.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      if (detect(item.font)) {
        const fonts = document.createElement('div');
        fonts.style.fontFamily = `"${item.font}"`;
        fonts.innerHTML += item.font;
        body.appendChild(fonts);
      }
    });
  })
  .catch((err) => {
    throw err;
  });
