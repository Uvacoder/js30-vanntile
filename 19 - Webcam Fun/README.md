# Webcam Fun

This tutorial shows how to play the camera feed into a `canvas` and apply filters on the raw data.

![Webcam Fun](../assets/img/19%20-%20Webcam%20Fun.png?raw=true "Presentation Image")

## My contribution

I have improved the performance of applying live filters by applying the
following fixes, gaining **10 fps**, after performance testing, in Firefox 64:
 - as the filter functions get an `Array object` as a parameter, they manipulate
 directly the contents of the `pixels` array, so the return is redundant
 - declared a few variables in the global `scope` to avoid redeclaration every
 16 miliseconds

## Learning notes

Some concepts taught:

- `navigator.mediaDevices` for the camera stream
- a npm local server was needed
- `Uint8ClampedArray` for the video pixel data
- Canvas's `getImageDate()` and `putImageData()` methods
- Canvas's `toDataURL()` method for Base64 image generation
- `insertBefore()` for Node insertion
- manual `RGBA filters`

```javascript
// splitting the RGB stream
const rgbSplit = (pixels) => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] // Red
    pixels.data[i + 100] = pixels.data[i + 1] // Green
    pixels.data[i - 150] = pixels.data[i + 2] // Blue
  }
}

// painting to canvas
const paintToCanvas = () => {
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    console.log(pixels)
    // ctx.globalAlpha = 0.1 // multiple layer painting - ghosting effect
    // redEffect(pixels) // shifting the red pixels
    rgbSplit(pixels) // splitting the RGB channels
    // greenScreen(pixels) // removing the alpha on pixels
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

```
