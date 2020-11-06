'use strict';

// Lake Harbor Park (to-do: make into array of locations)
const lat = 43.1694497;
const lng = -86.2915768;
const source = 'sg'; // weather data source (stormglass)
const start = '2020-11-05T14%3A00%3A00%2B00%3A00'; // Timestamp in UTC for first forecast hour (2018-11-23T10%3A00%3A00%2B00%3A00 => (%3A = :), (%2B = +) => 2018-11-23T10:00:00+00:00)
const end = '2020-11-05T14%3A00%3A00%2B00%3A00'; // Timestamp in UTC for last forecast hour
const params = 'windSpeed,windDirection,swellHeight,airTemperature,waterTemperature';
const stormGlassURL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}&source=${source}&params=${params}`;
//const googleMapsURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA2SftXzWm8fTk0GqMSs9vTwa3zVYIj6bE&libraries=geometry,places&callback=initMap`;


function displayData(jsonData) {
  // empty old results in html index
  console.log(jsonData);
  $('#results-list').empty();
  // loops through data to show on web page (to do: link lat/lng to google to display location name)
  for (let i=0; i<jsonData.hours.length; i++) {
    $('#results-list').append(
      `<h2>Surf Location</h2>
      <li>
      <p>${jsonData.hours[i].windDirection.sg}</p>
      <p>${jsonData.hours[i].windSpeed.sg}</p>
      <p>${jsonData.hours[i].swellHeight.sg}</p>
      <p>${jsonData.hours[i].airTemperature.sg}</p>
      <p>${jsonData.hours[i].waterTemperature.sg}</p>
      </li>`
  )};
  //display the results section  
  $('#results').removeClass('hidden');
}


function getData() {
  fetch(stormGlassURL, {
    headers: {
      //'Authorization': '3b1a2f0c-1d15-11eb-8db0-0242ac130002-3b1a2fac-1d15-11eb-8db0-0242ac130002' // derek.arrotta@gmail.com
      'Authorization': '97763c44-1f92-11eb-a5a9-0242ac130002-97763d02-1f92-11eb-a5a9-0242ac130002' // arro6582@gmail.com
    }
    })
      .then(response => response.json())
      .then(jsonData => {
        // Do something with response data.
        displayData(jsonData)
      });
}

// Initialize and add the map
function initMap() {
  // define location to center the map
  const bigRapids = { lat: 43.6994926, lng: -85.4971681 }; // to center the mao
  // center map on location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: bigRapids,
  });
  // position marker at location 
  const marker = new google.maps.Marker({
    position: bigRapids,
    map: map,
  });
}





/*
function getCurrentDate() {
  const currentDate = Date.now();
  console.log(currentDate);
}
$(getCurrentDate);
*/


// event listener function
function runFunctions() {
  getData();
  initMap();
}

// run functions
$(runFunctions);
