var x = document.getElementById("status");

function showPosition(position) {
    console.log("in there");

    console.log(position);

    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

function getLocation() {
  if (navigator.geolocation) {
    console.log("****");
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("****");
    sleep(10000);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function sleep(milliseconds) { 
    let timeStart = new Date().getTime(); 
    while (true) { 
      let elapsedTime = new Date().getTime() - timeStart; 
      if (elapsedTime > milliseconds) { 
        break; 
      } 
    } 
  } 

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }
