const PI = 3.14;
let radius = 3;
let area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
}
area = circleArea(3);
console.log('Area1: ', area);
radius = 4;
console.log('Area2: ', area);