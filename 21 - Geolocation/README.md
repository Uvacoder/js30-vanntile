# Geolocation

This tutorial shows how to use the `Geolocation API` to get the speed and orientation of the phone.

![Geolocation](../assets/img/21%20-%20Geolocation.png?raw=true "Presentation Image")

## My contribution

I have tested on the tutorial, debugging on Firefox for Android using the following:
 - `adb` for Android debugging
 - `live-server-htts` for a secure certificates to access the phone location
 - a location spoofer for mocking

## Learning notes

Some concepts taught:

 - `Navigator.geolocation` from `Geolocation API` recommandation
 - `watchPosition()` method to get the coordinates `data`

```javascript
// using the Geolocation API
navigator.geolocation.watchPosition((data) => {
  speed.textContent = Math.round(data.coords.speed * 100) / 100
  arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  alert('Location permission is needed for speedometer')
})
```
