// Color Arrays
var colors1 = ["salmon","yellow","pink","magenta","orange","darkviolet","deepskyblue"],
    colors2 = ["#da47ff","#47f5ff","#47ff90","#ffc147","#ff7847","#e2ff78","#ff2f7f"],
    colors3 = ["fuchsia","lime","teal","aqua","silver","palegreen","coral"],
    colors4 = ["lightcoral","mediumvioletred","chocolate","indigo","goldenrod","chartreuse","sandybrown"],
    gridColors = ["lightseagreen","aquamarine","paleturquoise","darkviolet","darkcyan","mediumslateblue","steelblue"];

// setInterval Changes Bg Color
setInterval("Animate()", 800);
function Animate() {
  var randColor;
  do {
    randColor = colors1[Math.floor(Math.random() * colors1.length)];
  } while (colors1 == randColor);
  var body = Q("body");
  body.style.background = randColor;
  body.style.transition = "All 0.5s ease-in-out 0.1s";
  
  // When window loads fire up functions
  window.onload = Animate;
}

// setInterval Changes Block Colors
setInterval("Animate2()", 1000);
function Animate2() {
  var randColor1, randColor2, randColor3, randColor4;
  do {
    randColor1 = colors1[Math.floor(Math.random() * colors1.length)];
    randColor2 = colors2[Math.floor(Math.random() * colors2.length)];
    randColor3 = colors3[Math.floor(Math.random() * colors3.length)];
    randColor4 = colors4[Math.floor(Math.random() * colors4.length)];
  } while (colors1 == randColor1 && colors2 == randColor2 && colors3 == randColor3 && colors4 == randColor4);

  // selects block class in hmtl
  var blocks = [Q(".block1"), Q(".block2"), Q(".block3"), Q(".block4"), Q(".block5"), Q(".block6"), Q(".block7"), Q(".block8")];

  blocks.forEach(()=>{
    
    // Block1
    blocks[0].style.background = randColor1;
    blocks[0].style.transition = "All 0.5s ease-in-out 0.1s";

    // Block2
    blocks[1].style.background = randColor3;
    blocks[1].style.transition = "All 0.8s ease-in-out 0.3s";
  
    // Block3
    blocks[2].style.background = randColor2;
    blocks[2].style.transition = "All 0.4s ease-in-out 0.2s";
  
    // Block4
    blocks[3].style.background = randColor4;
    blocks[3].style.transition = "All 0.5s ease-in-out 0.4s";

    // Block5
    blocks[4].style.background = randColor1;
    blocks[4].style.transition = "All 0.2s ease-in-out 0.1s";
  
    // Block6
    blocks[5].style.background = randColor4;
    blocks[5].style.transition = "All 0.3s ease-in-out 0.3s";
  
    // Block7
    blocks[6].style.background = randColor3;
    blocks[6].style.transition = "All 0.4s ease-in-out 0.2s";
  
    // Block8
    blocks[7].style.background = randColor1;
    blocks[7].style.transition = "All 0.5s ease-in-out 0.4s";

  });

  // When window loads fire up functions
  window.onload = Animate2;
}

setInterval("gridAnimate()", 1000);
function gridAnimate(){
  var randColor1;
  do {
    randColor1 = gridColors[Math.floor(Math.random() * gridColors.length)];
  } while (gridColors == randColor1);

  Q('.grid').style.background = randColor1;
  Q('.grid').style.transition = "All 0.5s ease-in-out 0.4s";
  
  // When window loads fire up functions
  window.onload = gridAnimate;
}
