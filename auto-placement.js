var container = document.getElementsByClassName("container");
console.log(container);

var boxes = container[0].getElementsByClassName("box");
console.log(boxes);

function fillBox(i, color){
  let currBox = boxes.item(i);
  console.log(currBox);
  currBox.style.backgroundColor = color;
  // to center text
  //let countNode = document.createElement("span");
  let countNode = (currBox.firstElementChild||currBox.firstChild);
  countNode.innerHTML = (i+1);
  countNode.style.fontSize = "40px";
  countNode.style.color = "black";
  //countNode.style.border = "0.5px solid red";
  currBox.appendChild(countNode);
}

var delayInMilliseconds = 1000; //1 second
var counter = 0;
var numBoxes = boxes.length;
var color = "#ffb";
var timedLoop = setInterval(function() {
  fillBox(counter, color); 
  counter++;
  if(counter===numBoxes) {
    //clearInterval(i);
    counter = 0;
    color = (color === "#ffb" ? "#bff" : "#ffb");
  }
}, delayInMilliseconds);
