"use strict";



let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');





let weatherURL = '/weather/js/weather.json';


function fetchData(weatherURL){
let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let g = data[cityName];

      // ************ Get the content ******************************

      // Get the location data
      let locName = g.City;
      let locState = g.State;
      // Put them together
      let fullName = locName+', '+locState;
      // See if it worked
      console.log('fullName is: '+fullName);

      // Get the temperature data
      let locTemp = g.Temp;      //i added this

      // Get the wind data
      let locWind = g.Wind;    //i added this

      // Get the current conditions
      let locCurrent = g.Summary;    //i added this

      // Get the hourly data
      let locHourly = g.Hourly;    //i added this

      // ************ Display the content ****************************** WALK THROUGH THIS PART
      // Set the title with the location name at the first
      // Gets the title element so it can be worked with
      let pageTitle = document.getElementById('page-title');
      // Create a text node containing the full name
      let fullNameNode = document.createTextNode(fullName);
      // inserts the fullName value before any other content that might exist
      pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
      // When this is done the title should look something like this:
      // Greenville, SC | The Weather Site

      // Set the Location information
      // Get the h1 to display the city location
      let greenvilleHeader = document.getElementById('greenville-header');
      greenvilleHeader.innerHTML = fullName;
      // The h1 in main h1 should now say "Greenville, SC"


      // Set the temperature information
      let tempInfo = document.getElementById('main-temp');
      tempInfo.innerHTML = locTemp;
      console.log(tempInfo)
      // Set the wind information
      //let windInfo = document.getElementById(''); //FIX WIND DIAL IN HTML AND CSS
      //windInfo.innerHTML = locWind;
      // Set the current conditions information
      let currentInfo = document.getElementById('summary-statements');
      currentInfo.innerHTML = locCurrent;

      // Set the hourly temperature information


      // Change the status of the containers
      contentContainer.setAttribute('class', ''); // removes the hide class
      statusContainer.setAttribute('class', 'hide'); // hides the status container
    }).catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
});
}

fetchData(weatherURL);
