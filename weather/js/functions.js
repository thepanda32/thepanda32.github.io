/**********************************
Weather Site Javascript Functions
***********************************/
console.log('My javascript is being read.');


//this weatherCondition variable needs to get the class (or "attribute") of that
//mother element that sets the background image for everything
var weatherCondition = document.getElementById("jstester").className;

var curWeather = document.getElementById("curweather").className;

var weatherKeyword = getCondition();

var meters = document.getElementById("metertester").className;

const feelTemp = document.getElementById("feelTemp");

const direction = "East";

console.log("weather condition variable returns: "+weatherCondition) //this is just to test the weatherCondition variable ^



function getCondition(){
  switch (weatherCondition){
    case "clear":
    case "Clear":
      return "clear";
      break;
    case "cloudy":
    case "Cloudy":
    case "clouds":
    case "Clouds":
    case "cloud":
    case "Cloud":
      return "cloud";
      break;
    case "fog":
    case "Fog":
    case "foggy":
    case "Foggy":
      return "fog";
      break;
    case "rain":
    case "Rain":
    case "rainy":
    case "Rainy":
      return "rain";
      break;
    case "snow":
    case "Snow":
    case "snowing":
    case "Snowing":
        return "snow";
      break;


    default:
    console.log("getCondition didn't get nuffin'");

  }
}

function changeSummaryImage(){
  switch (weatherKeyword) {
    case "clear":
        document.getElementById("curweather").className = "clear"
      break;
    case "cloud":
      document.getElementById("curweather").className = "cloudy"
      break;
    case "fog":
      document.getElementById("curweather").className = "fog"
      break;
    case "rain":
      document.getElementById("curweather").className = "rain"
      break;
    case "snow":
      document.getElementById("curweather").className = "snow"
      break;

    default:
      console.log("end of changeSummaryImage function");

  }

}

function convertMeters(){
  console.log(Math.round(meters * 3.28084) + " feet")
}



function windDial(direction){
const dial = document.getElementById("dial")

// Determine the dial class
 switch (direction){
  case "North":
  case "N":
   dial.setAttribute("class", "n"); //"n" is the CSS rule selector
   break;
  case "NE":
  case "NNE":
  case "ENE":
   dial.setAttribute("class", "ne");
   break;
  case "NW":
  case "NNW":
  case "WNW":
   dial.setAttribute("class", "nw");
   break;
  case "South":
  case "S":
   dial.setAttribute("class", "s");
   break;
  case "SE":
  case "SSE":
  case "ESE":
   dial.setAttribute("class", "se");
   break;
  case "SW":
  case "SSW":
  case "WSW":
   dial.setAttribute("class", "sw");
   break;
  case "East":
  case "E":
   dial.setAttribute("class", "e");
   break;
  case "West":
  case "W":
   dial.setAttribute("class", "w");
   break;
 }


}

convertMeters()
windDial(direction)
changeSummaryImage()
console.log("weatherKeyword returns 'snow'")
