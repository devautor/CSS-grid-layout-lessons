var container = document.getElementsByClassName("container");
console.log(container);

var boxes = container[0].getElementsByClassName("box");
console.log(boxes);

function setBoxContent (currBox, i, color) {
  currBox.style.backgroundColor = color;
  let countNode = (currBox.firstElementChild||currBox.firstChild);
  countNode.innerHTML = (i+1);
  countNode.style.fontSize = "40px";
  countNode.style.color = "black";
}
/*
function fillExplicitBox(i, color){
  let currBoxNumber = explicitBoxes[i];
  let currBox = boxes.item(currBoxNumber);
  setBoxContent(currBox, currBoxNumber, color);
}
*/

function fillBox(i, color){
  let currBox = boxes.item(i);
  console.log(currBox);
  setBoxContent(currBox, i, color);
}

var explicitBoxes = [6,5,11];
var implicitBoxes = [];
let numBoxes = boxes.length;
let numExplicitBoxes = explicitBoxes.length; 
for(let j=1; j<=numBoxes; j++) {
  if(! explicitBoxes.includes(j)){
    implicitBoxes.push(j);
  }
}
let orderBoxes = explicitBoxes.concat(implicitBoxes);

let delayInMilliseconds = 1000;
let counter = 0;
let color = "#ffb";
let exColor = "#0fb";

var timedLoop = setInterval(function() {
  if(counter < numExplicitBoxes){
    fillBox(orderBoxes[counter]-1, exColor);
  }  
  else {
    fillBox(orderBoxes[counter]-1, color); 
  }
  counter++;
  if(counter===numBoxes) {
    //clearInterval(i);
    counter = 0;
	exColor = (exColor === "#0fb" ? "#bf0" : "#0fb");
    color = (color === "#ffb" ? "#bff" : "#ffb");
  }
}, delayInMilliseconds);
