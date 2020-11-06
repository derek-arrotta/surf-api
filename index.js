'use strict';

// STORMGLASS.IO
// Lake Harbor Park (to-do: make into array of locations)
const lat = 43.1694497;
const lng = -86.2915768;
const source = 'sg'; // weather data source (stormglass)
const start = '2020-11-05T14%3A00%3A00%2B00%3A00'; // Timestamp in UTC for first forecast hour (2018-11-23T10%3A00%3A00%2B00%3A00 => (%3A = :), (%2B = +) => 2018-11-23T10:00:00+00:00)
const end = '2020-11-05T14%3A00%3A00%2B00%3A00'; // Timestamp in UTC for last forecast hour
const params = 'windSpeed,windDirection,swellHeight,airTemperature,waterTemperature';
const stormGlassURL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}&source=${source}&params=${params}`;

// GOOGLE MAPS
//const googleMapsURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA2SftXzWm8fTk0GqMSs9vTwa3zVYIj6bE&libraries=geometry,places&callback=initMap`;
//const googlePlaceSearchURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY';
const googleMapsKey = 'AIzaSyA2SftXzWm8fTk0GqMSs9vTwa3zVYIj6bE';
const input = 
  [
    'Beverly%20Shores%20Indiana',
    'Michigan%20City%20Indiana',
    'New%20Buffalo%20Michigan'
  ];
const inputtype = 'textquery';
const fields = 'photos,formatted_address,name,rating,opening_hours,geometry';
  // i need to define a place by search term (I'll take search terms from my own array of created location names)
  // then one that place is defined, i can get place details (images, lat/long, etc?)
  // then with the defined lat/long, I can put that into the stormGlass url
  // then with some sort of javascript "find current date/time" function, I'll enter that date time into stormglass url


function displaySgData(jsonData) {
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

function displayGoogleSearchData(googleSearchResponseJson) {
  console.log(googleSearchResponseJson);
}


function getSgData() {
  fetch(stormGlassURL, {
    headers: {
      //'Authorization': '3b1a2f0c-1d15-11eb-8db0-0242ac130002-3b1a2fac-1d15-11eb-8db0-0242ac130002' // derek.arrotta@gmail.com
      'Authorization': '97763c44-1f92-11eb-a5a9-0242ac130002-97763d02-1f92-11eb-a5a9-0242ac130002' // arro6582@gmail.com
    }
    })
      .then(response => response.json())
      .then(jsonData => {
        // Do something with response data.
        displaySgData(jsonData)
      });
}
function getGoogleSearchPlace() {
  const googlePlaceSearchURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=${inputtype}&fields=${fields}&key=${googleMapsKey}`;
  for (let i=0; i<input.length; i++) {
    // loop through input and create multiple URLs to fetch (put fetch into loop?? i variable below?)
  }

  fetch(googlePlaceSearchURL[i])
    .then(googleSearchResponse => googleSearchResponse.json())
    .then(googleSearchResponseJson => {
      // Do something with response data.
      displayGoogleSearchData(googleSearchResponseJson)
    });
}

// Initialize and add the map
function initMap() {
  // define locations by lat/long
  const bigRapids = { lat: 43.6994926, lng: -85.4971681 }; // MI (to center the map)
  //const beverlyShores = { lat:41.6906432, lng:-87.0063084 }; // Beverly Shores, IN
  //const michiganCity = { lat:41.7096482, lng:-86.9095884 }; // Michigan City, IN // Michigan+City,+IN/@41.7096482,-86.9095884
  // put location into array
  const surfSpots = [
    {
      locationName: 'Beverly Shores',
      lat: 41.6906432,
      lng: -87.0063084,
      url: 'https://www.google.com/maps/place/Beverly+Shores,+IN/@41.6907073,-87.0063084,13z/data=!3m1!4b1!4m5!3m4!1s0x8811a663425826e9:0x81e1d818faf7701b!8m2!3d41.6925381!4d-86.9775319'
    },
    {
      locationName: 'Michigan City',
      lat: 41.7096482,
      lng: -86.9095884,
      url: 'https://www.google.com/maps/place/Michigan+City,+IN/@41.7096482,-86.9095884,13z/data=!3m1!4b1!4m5!3m4!1s0x8811058540da2c03:0x852e2fee2dcd02c8!8m2!3d41.7075394!4d-86.8950297'
    },
    {
      locationName: 'New Buffalo',
      lat: 41.7911791,
      lng: -86.7597859,
      url: 'https://www.google.com/maps/place/New+Buffalo,+MI+49117/@41.7911791,-86.7597859,14z/data=!3m1!4b1!4m5!3m4!1s0x881104ab3abdb807:0xe2be4e7c83fc4f93!8m2!3d41.7939302!4d-86.7439154'
    }
    /*{
      locationName: ,
      lat: ,
      lng: ,
      url: ''
    },
    {
      locationName: ,
      lat: ,
      lng: ,
      url: ''
    },
    {
      locationName: ,
      lat: ,
      lng: ,
      url: ''
    },
    {
      locationName: ,
      lat: ,
      lng: ,
      url: ''
    }*/
  ];
  // center map on location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: bigRapids,
  });
  // position location markers to display
  for (let i=0; i<surfSpots.length; i++) {
    const marker = new google.maps.Marker({
      position: { lat: surfSpots[i].lat, lng: surfSpots[i].lng },
      map: map,
      title: surfSpots[i].locationName,
    });
    const infowindow = new google.maps.InfoWindow({
      content: surfSpots[i].locationName,
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  };

};





/*
function getCurrentDate() {
  const currentDate = Date.now();
  console.log(currentDate);
}
$(getCurrentDate);
*/


// event listener function
function runFunctions() {
  getSgData();
  initMap();
}

// run functions
$(runFunctions);
