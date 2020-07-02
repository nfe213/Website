var $ = require('jquery')

//console.log('Hello There!');


//Init Variables all at null since none have been recieved by JS from PY
let ranNum = Math.floor(Math.random()*100); //Just for testing, just gens a random whole number between 0 * 100
let ranNum2 = Math.floor(Math.random()*100); //Just for testing, just gens a random whole number between 0 * 100
let ranNum3 = Math.floor(Math.random()*100); //Just for testing, just gens a random whole number between 0 * 100
let i = 0; //Const for loop function
let test = document.getElementById('speed');

//$('#someID').html("<p>Hello, <b>World</b>!</p>");

//const changeHeading = (headingID, headingText) =>
 //const heading = document.getElementById(headingID);
  //heading.textContent = headingText;

//changeHeading('speed', 'Test');


//Main Loops
function setup() {
  setTimeout(loop, 2000);
}

function loop() {
  console.log(ranNum)
  console.log(ranNum2)
  console.log(ranNum3)
  while (i = 0) {
    ranNum = Math.floor(Math.random()*100);
    ranNum2 = Math.floor(Math.random()*100);
    ranNum3 = Math.floor(Math.random()*100);
  }
}

setup();


//variableName.addEventListner('click', function(){
  //console.log("Buttton Clicked")
//})



//JavaScript God Gamer Man: https://www.youtube.com/watch?v=jaVNP3nIAv0
//Browserify Tutorial: https://www.youtube.com/watch?v=CTAa8IcQh1U
