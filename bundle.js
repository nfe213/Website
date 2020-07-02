(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//var $ = require('jquery')

console.log('Hello There!');

//Init Variables all at null since none have been recieved by JS from PY
//let speed = null;
//let rpm = null;
//let temp = null;
let ranNum = Math.floor(Math.random()*100); //Just for testing, just gens a random whole number between 0 * 100
let ranNum2 = Math.floor(Math.random()*100); //Just for testing, just gens a random whole number between 0 * 100
let ranNum3 = Math.floor(Math.random()*100); //Just for testing, just gens a random whole number between 0 * 100
let i = 0; //Const for loop function

//This function writes the new speed, rpm, and temp data into the HTML
function changeHeading (speedID, newSpeed, tachID, newTach, tempID, newTemp) {
  //console.log('Writing to HTML'); //console.log statements are commented out because they are not needed except for development
  const speedTagUpdate = document.getElementById(speedID);
  speedTagUpdate.textContent = newSpeed;
  const tachTagUpdate = document.getElementById(tachID);
  tachTagUpdate.textContent = newTach;
  const tempTagUpdate = document.getElementById(tempID);
  tempTagUpdate.textContent = newTemp;
}

//This is a delay to cause setTimeout to happen every 2 seconds
function setup() {
  //console.log('Setup running.');
  setTimeout(loop, 250);
}

//When called, this generates new random values, writes them to the console, writes them to the HTML, and then loops back to setup()
function loop() {
  //console.log("Loop has run.")
   do {
    //console.log('While loop opened.');
    ranNum = Math.floor(Math.random()*100);
    ranNum2 = Math.floor(Math.random()*100);
    ranNum3 = Math.floor(Math.random()*100);
    console.log(ranNum)
    console.log(ranNum2)
    console.log(ranNum3)
    changeHeading('speed', 'sample heading text', 'rpm', ranNum2, 'temp', ranNum3);
    setup();
  }
  while (i = 0)
  //console.log('While loop finished.')
}

//Runs setup the first time.
//console.log('Running setup()');
setup();


//variableName.addEventListner('click', function(){
  //console.log("Buttton Clicked")
//})



//JavaScript God Gamer Man: https://www.youtube.com/watch?v=jaVNP3nIAv0
//Browserify Tutorial: https://www.youtube.com/watch?v=CTAa8IcQh1U

},{}]},{},[1]);
