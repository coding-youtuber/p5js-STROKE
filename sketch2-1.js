
function setup() {
  let xoff = 1;

  createCanvas(windowWidth, windowHeight);
  background("#000000");

  strokeWeight(10);
  stroke("#ffffff");


  // 終点のX座標にノイズを加える
  for(var i = 0; i < 10; i++) {
    let startPointX = random(width);
    let startPointY = 0;
    let endPointX = noise(xoff) * width;
    let endPointY = height;

    line(startPointX, startPointY, endPointX, endPointY);

    xoff += 0.01;
  }
}