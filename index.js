'use strict';
// to-do
  // i need to define a place by search term (I'll take search terms from my own array of created location names)
  // then one that place is defined, i can get place details (images, lat/long, etc?)
  // then with the defined lat/long, I can put that into the stormGlass url
  // then with some sort of javascript "find current date/time" function, I'll enter that date time into stormglass url

const surfSpots = [
  {
    locationName: 'Beverly Shores IN',
    lat: 41.6906432,
    lng: -87.0063084,
    url: 'https://www.google.com/maps/place/Beverly+Shores,+IN/@41.6907073,-87.0063084,13z/data=!3m1!4b1!4m5!3m4!1s0x8811a663425826e9:0x81e1d818faf7701b!8m2!3d41.6925381!4d-86.9775319'
  },
  {
    locationName: 'Michigan City IN',
    lat: 41.7096482,
    lng: -86.9095884,
    url: 'https://www.google.com/maps/place/Michigan+City,+IN/@41.7096482,-86.9095884,13z/data=!3m1!4b1!4m5!3m4!1s0x8811058540da2c03:0x852e2fee2dcd02c8!8m2!3d41.7075394!4d-86.8950297'
  },
  {
    locationName: 'New Buffalo MI',
    lat: 41.7911791,
    lng: -86.7597859,
    url: 'https://www.google.com/maps/place/New+Buffalo,+MI+49117/@41.7911791,-86.7597859,14z/data=!3m1!4b1!4m5!3m4!1s0x881104ab3abdb807:0xe2be4e7c83fc4f93!8m2!3d41.7939302!4d-86.7439154'
  },
  {
    locationName: 'South Haven MI',
    lat: 42.398715,
    lng: -86.3344275,
    url: 'https://www.google.com/maps/place/South+Haven,+MI+49090/@42.398715,-86.3344275,12z/data=!3m1!4b1!4m5!3m4!1s0x8810acb72c415cf7:0x974268a9e38a9f76!8m2!3d42.4030865!4d-86.2736407'
  },
  {
    locationName: 'Holland MI',
    lat: 42.7661215,
    lng: -86.2467458,
    url: 'https://www.google.com/maps/place/Holland,+MI+49423/@42.7661215,-86.2467458,11z/data=!3m1!4b1!4m5!3m4!1s0x881992bea18f59f1:0x70e705a6a62359d2!8m2!3d42.7875235!4d-86.1089301'
  },
  {
    locationName: 'Grand Haven State Park MI', // south pier
    lat: 43.0549389,
    lng: -86.2551367,
    url: 'https://www.google.com/maps/place/Grand+Haven+State+Park/@43.0549389,-86.2551367,15z/data=!4m8!1m2!2m1!1sgrand+haven+state+park!3m4!1s0x8819809871194045:0x49b03ed4a17fba07!8m2!3d43.0560329!4d-86.2465314'
  },
  {
    locationName: 'Muskegon MI',
    lat: 43.2367051,
    lng: -86.3962669,
    url: 'https://www.google.com/maps/place/Muskegon,+MI/@43.2367051,-86.3962669,11z/data=!3m1!4b1!4m5!3m4!1s0x88197cc3a93d9ed9:0x247e359134f72540!8m2!3d43.2341813!4d-86.2483921'
  },
  {
    locationName: 'Montague MI',
    lat: 43.4102174,
    lng: -86.3946676,
    url: 'https://www.google.com/maps/place/Montague,+MI/@43.4102174,-86.3946676,13z/data=!3m1!4b1!4m5!3m4!1s0x881bdd94e2fd749d:0x293e1d4e13cef678!8m2!3d43.4166772!4d-86.357013'
  },
  {
    locationName: 'Empire Beach MI',
    lat: 44.8120592,
    lng: -86.0768625,
    url: 'https://www.google.com/maps/place/Empire+Beach/@44.8120592,-86.0768625,15z/data=!3m1!4b1!4m5!3m4!1s0x881e1b83d130a2d1:0xac339e33ee21b6de!8m2!3d44.8120443!4d-86.0681292'
  },
  {
    locationName: 'Charlevoix South Pier Head MI',
    lat: 45.3202493,
    lng: -85.2736611,
    url: 'https://www.google.com/maps/place/Charlevoix+South+Pier+Head/@45.3202493,-85.2736611,15z/data=!3m1!4b1!4m5!3m4!1s0x4d4aedb63e4a5159:0xc521b2e321d87ee3!8m2!3d45.3202345!4d-85.2649278'
  },
  {
    locationName: 'Bay City MI',
    lat: 43.5813511,
    lng: -83.9534031,
    url: 'https://www.google.com/maps/place/Bay+City,+MI/@43.5813511,-83.9534031,12z/data=!3m1!4b1!4m5!3m4!1s0x8823e104be406d25:0x34d0a227f2ae3802!8m2!3d43.5944677!4d-83.8888647'
  },
  {
    locationName: 'Port Austin MI',
    lat: 44.0448863,
    lng: -83.0297296,
    url: 'https://www.google.com/maps/place/Port+Austin,+MI+48467/@44.0448863,-83.0297296,13z/data=!3m1!4b1!4m5!3m4!1s0x8826f9e4a56a62b7:0x2a86ee37ec7bfa02!8m2!3d44.0461253!4d-82.994114'
  },
  {
    locationName: 'Forester/Sanilac MI',
    lat: 43.4992463,
    lng: -82.6043035,
    url: 'https://www.google.com/maps/place/Forester,+MI+48419/@43.4992463,-82.6043035,13z/data=!3m1!4b1!4m5!3m4!1s0x8825de2452944703:0xba5f82e3631bafe5!8m2!3d43.4991899!4d-82.5693699'
  },
  {
    locationName: 'Lexington MI',
    lat: 43.2681746,
    lng: -82.571478,
    url: 'https://www.google.com/maps/place/Lexington,+MI+48450/@43.2681746,-82.571478,13z/data=!3m1!4b1!4m5!3m4!1s0x8825eac0e0974c3b:0x484511f69838cc33!8m2!3d43.268082!4d-82.5307575'
  },
  {
    locationName: 'Lakeport MI',
    lat: 43.115085,
    lng: -82.5251318,
    url: 'https://www.google.com/maps/place/Lakeport,+MI+48059/@43.115085,-82.5251318,13z/data=!3m1!4b1!4m5!3m4!1s0x88259724678e62db:0x37a56c637f046b05!8m2!3d43.1150282!4d-82.4901982'
  },
  {
    locationName: 'Port Huron MI',
    lat: 42.9891577,
    lng: -82.502486,
    url: 'https://www.google.com/maps/place/Port+Huron,+MI/@42.9891577,-82.502486,12z/data=!3m1!4b1!4m5!3m4!1s0x88259c626dc72a21:0x5438fe44d324f6c!8m2!3d42.9708634!4d-82.4249142'
  },
  {
    locationName: 'Luna Pier MI',
    lat: 41.8046151,
    lng: -83.4699596,
    url: 'https://www.google.com/maps/place/Luna+Pier,+MI/@41.8046151,-83.4699596,13z/data=!3m1!4b1!4m5!3m4!1s0x883b79f0fb0d4097:0xd671391d889eac61!8m2!3d41.8069907!4d-83.442433'
  }
];

// need a function that takes lat/lng from array on location click, and puts into getSgData function

// FETCH DATA FROM API's
let timeFormatted = '';
function getCurrentDate() {
  const timeUTCms = Date.now(); //method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
  const timeUTCiso = new Date(timeUTCms).toISOString(); // converts ms to iso string "2020-11-08T22:15:49.956Z"
  //const year = new Date(timeUTCms).getUTCFullYear(); // year
  //const month = new Date(timeUTCms).getUTCMonth() + 1; // month (january is 0)
  //const day = new Date(timeUTCms).getUTCDate(); // day
  //const hours = new Date(timeUTCms).getUTCHours(); // hours
  //const minutes = new Date(timeUTCms).getUTCMinutes(); // minutes
  //const seconds = new Date(timeUTCms).getUTCSeconds(); // seconds
  //const milliseconds = new Date(timeUTCms).getUTCMilliseconds(); // milliseconds
  console.log(timeUTCiso);
  //console.log(year);
  //console.log(month);
  //console.log(day);
  //console.log(hours);
  //console.log(minutes);
  //console.log(seconds);
  //console.log(milliseconds);
  //let timeFormatted = '';
  let timeFormatted1 = '';
  let timeFormatted2 = '';
  let timeFormatted3 = '';
  //let timeFormatted4 = '';
  for (let i=0; i<13; i++) {
    timeFormatted1 += timeUTCiso[i];
  }
  for (let i=14; i<16; i++) {
    timeFormatted2 += timeUTCiso[i];
  }
  for (let i=17; i<19; i++) {
    timeFormatted3 += timeUTCiso[i];
  }
  //for (let i=20; i<22; i++) {
  //  timeFormatted4 += timeUTCiso[i]; // milliseconds (not working in sg fetch url for some reason. maybe these are formatted)
  //}
  console.log(timeFormatted1);
  console.log(timeFormatted2);
  console.log(timeFormatted3);
  //console.log(timeFormatted4);
  timeFormatted = timeFormatted1 + '%3A' + timeFormatted2 + '%3A' + timeFormatted3 + '%2B' + '00' + '%3A00';
  console.log(timeFormatted);
} 
  


function getSgData() {
  // stormglass.io
  const lat = surfSpots[0].lat; // 41.6906432; // 'Beverly Shores IN'
  const lng = surfSpots[0].lng; //-87.0063084;
  const source = 'sg'; // weather data source (stormglass)
  //const start = '2020-11-09T12%3A15%3A00%2B00%3A00'; // Timestamp in UTC for first forecast hour (2018-11-23T10%3A00%3A00%2B00%3A00 => (%3A = :), (%2B = +) => 2018-11-23T10:00:00+00:00)
  //const end = '2020-11-09T12%3A15%3A00%2B00%3A00'; // Timestamp in UTC for last forecast hour
  //console.log(start);
  let start = timeFormatted;
  let end = timeFormatted;
  console.log(start);
  const params = 'windSpeed,windDirection,swellHeight,waveHeight,airTemperature,waterTemperature';
  const stormGlassURL = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}&source=${source}&params=${params}`; 
  fetch(stormGlassURL, {
    headers: {
      'Authorization': '3b1a2f0c-1d15-11eb-8db0-0242ac130002-3b1a2fac-1d15-11eb-8db0-0242ac130002' // derek.arrotta@gmail.com
      //'Authorization': '97763c44-1f92-11eb-a5a9-0242ac130002-97763d02-1f92-11eb-a5a9-0242ac130002' // arro6582@gmail.com
    }
    })
      .then(response => response.json())
      .then(jsonSgData => {
        // Do something with response data.
        displaySgData(jsonSgData)
        console.log(surfSpots[0].lat);
        console.log(jsonSgData.meta.lat);
      });
}

  /*
  function getGoogleSearchPlace() {
    // example url
    // const googlePlaceSearchURL = 
    // 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&
    // inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=YOUR_API_KEY';
    const googleMapsKey = 'AIzaSyA2SftXzWm8fTk0GqMSs9vTwa3zVYIj6bE';
    const locations = 
    [
      'Beverly%20Shores%20Indiana',
      'Michigan%20City%20Indiana',
      'New%20Buffalo%20Michigan'
    ];
    const inputtype = 'textquery';
    const fields = 'photos,formatted_address,name,rating,opening_hours,geometry';
    
    for (let i=0; i<locations.length; i++) {
      // loop through input and create multiple URLs to fetch (put fetch into loop?? i variable below?)
      const input = locations[i];
      const googlePlaceSearchURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=${inputtype}&fields=${fields}&key=${googleMapsKey}`;
      console.log(googlePlaceSearchURL);
      
      fetch(googlePlaceSearchURL) 
      //{ 
      //  headers: { 'Access-Control-Allow-Origin': '*' }
      //}
      //)
        //.then(googleSearchResponse => googleSearchResponse.json())
        .then(googleSearchResponseJson => {
          // Do something with response data.
          displayGoogleSearchData(googleSearchResponseJson)
        });
    }
  }
*/


// DISPLAY DATA FROM API FETCH
function displaySgData(jsonSgData) {
  // empty old results in html index
  console.log(jsonSgData);
  $('#results-list').empty();
  // loops through data to show on web page (to do: link lat/lng to google to display location name)
  for (let i=0; i<jsonSgData.hours.length; i++) {
    $('#results-list').append(
      `<h2>Surf Location</h2>
      <li>
      <p>Wind Direction: ${jsonSgData.hours[i].windDirection.sg} degrees</p>
      <p>Wind Speed: ${jsonSgData.hours[i].windSpeed.sg} m/s</p>
      <p>Swell Height: ${jsonSgData.hours[i].swellHeight.sg} m</p>
      <p>Wave Height: ${jsonSgData.hours[i].waveHeight.sg} m</p>
      <p>Air Temperature: ${jsonSgData.hours[i].airTemperature.sg} °C</p>
      <p>Water Temperature: ${jsonSgData.hours[i].waterTemperature.sg} °C</p>
      </li>`
  )};
  //display the results section  
  $('#results').removeClass('hidden');
}

//function displayGoogleSearchData(googleSearchResponseJson) {
//  console.log(googleSearchResponseJson);
//}


// Initialize and add the map
let marker;
function initMap() {
  // let marker = new google.maps.Marker();
  // center map on defined location
  const bigRapids = { lat: 43.6994926, lng: -85.4971681 }; // MI (to center the map)
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: bigRapids,
  });

  // position location markers to display
  for (let i=0; i<surfSpots.length; i++) {
    marker = new google.maps.Marker({
      position: { lat: surfSpots[i].lat, lng: surfSpots[i].lng },
      map: map,
      title: surfSpots[i].locationName,
    });
    //const infowindow = new google.maps.InfoWindow({
    //  content: surfSpots[i].locationName,
    //});
    //marker.addListener('click', () => {
    //  infowindow.open(map, marker);
    //});
    marker.addListener('click', () => {
        $(runFunctions);
    });
  };
};


// event listener function (just running function for now. need to add click function for when you click on map location)
function runFunctions() {
  getCurrentDate();
  getSgData();
  //initMap();
  //getGoogleSearchPlace();
}


//run functions
//$(runFunctions);
