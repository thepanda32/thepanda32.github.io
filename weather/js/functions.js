/**********************************
Weather Site Javascript Functions
***********************************/
console.log('My javascript is being read.');


var weatherCondition = document.getElementById("situation-statement").innerHTML;

console.log(weatherCondition) //this is just to test the weatherCondition variable ^

function getCondition(weatherCondition){
  var switcher = weatherCondition
  switch (weatherCondition) {
    case "clear":
      console.log("The weather is clear")

      break;
    default:
    console.log("end of switch");

  }
}

getCondition()
