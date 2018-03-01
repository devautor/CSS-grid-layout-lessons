var container = document.getElementsByClassName("wrapper");
console.log(container);

var boxes = container[0].getElementsByClassName("area-box");
console.log(boxes);

var boxE = document.getElementsByClassName("e");
console.log(boxE);

let areas = Array.from(boxes).concat(Array.from(boxE));
console.log(areas);
let numAreas = areas.length;

function colorBorderOfAreas(color){
  for(let j=0; j<numAreas; j++){
    areas[j].style.border = '2px solid '+color;
  }
}

let delayInMilliseconds = 1000;
let color = "blue";
var timedLoop = setInterval(function() {
  colorBorderOfAreas(color);
  color = (color === "blue" ? "transparent" : "blue");
  }, delayInMilliseconds);
