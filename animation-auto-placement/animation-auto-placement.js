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

function fillBox(i, color){
  let currBox = boxes.item(i);
  console.log(currBox);
  setBoxContent(currBox, i, color);
}

var explicitBoxes = [5];
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
let color = "#ff9069";
let exColor = "#e03f3f";

setTimeout(timedLoop, 10000);

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
	exColor = (exColor === "#e03f3f" ? "#b03532" : "#e03f3f");
    color = (color === "#ff9069" ? "#da6f2b" : "#ff9069");
  }
}, delayInMilliseconds);
