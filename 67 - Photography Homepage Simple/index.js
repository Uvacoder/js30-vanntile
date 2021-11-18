const imagesSource = [
  {
    src:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "lake with mountains and boats",
  },

  {
    src:
      "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "autumn forrest",
  },
  {
    src:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "bridge in the forrest",
  },
  {
    src:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "foggy mountain",
  },
  {
    src:
      "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    alt: "yellow meadow",
  },
  {
    src:
      "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "waterfall from red rock",
  },
  {
    src:
      "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixid=MXwxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "women at the boat on the lake in fog",
  },
  {
    src:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "foggy forrest",
  },
  {
    src:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "sunset above the mountains",
  },
  {
    src:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "sunlight in the forrest",
  },
  {
    src:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "kingfisher",
  },
  {
    src:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "lake from above",
  },
  {
    src:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "poppies",
  },
  {
    src:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
    alt: "big tree",
  },
  {
    src:
      "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "mountains",
  },
  {
    src:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "green hills",
  },
  {
    src:
      "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
    alt: "golden hour at seaside",
  },
  {
    src:
      "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "mirroing of the foggy mountains in the lake",
  },
  {
    src:
      "https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTR8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "two rocky islands in the see with sunlight shining on them",
  },
  {
    src:
      "https://images.unsplash.com/photo-1471513671800-b09c87e1497c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "road in forrest",
  },
];

const preview = document.getElementById("preview");
const caption = document.querySelector("figcaption");
const gallery = document.querySelector(".gallery");

onInit();

function onInit() {
  addImages();
}

function addImages() {
  for (let img of imagesSource) {
    let newImage = document.createElement("img");
    newImage.src = img.src;
    newImage.alt = img.alt;
    newImage.addEventListener("click", (e) => {
      showImage(e);
    });
    gallery.appendChild(newImage);
  }
}

const showImage = (e) => {
  preview.src = e.target.src;
  preview.alt = e.target.alt;
  caption.innerText = e.target.alt;
};
