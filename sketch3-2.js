
// white black
let ColorPalette = ["#F0F5F9", "#C9D6DF", "#52616B", "#1E2022"];

// dark blue, gray
// let ColorPalette = ["#222831", "#393E46", "#00ADB5", "#EEEEEE"];

// orange navy
// let ColorPalette = ["#222831", "#2D4059", "#FF5722", "#EEEEEE"];

// green
// let ColorPalette = ["#FCFFC1", "#9BF4D5", "#1DAD9B", "#346357"];

// purple
// let ColorPalette = ["#E4F5E5", "#A6DFDE", "#88A6E5", "#8D6EC8"];

// pastel color
// let ColorPalette = ["#F06868", "#FAB57A", "#EDF798", "#80D6FF"];

// green blue
// let ColorPalette = ["#0278AE", "#51DACF", "#9EF5CF", "#E8FFC1"];


function setup() {
  let xoff = 1;
  let density = 1;

  createCanvas(windowWidth, windowHeight);

  let randBgColor = getRandomElement(ColorPalette);
  background(randBgColor);

  strokeWeight(10);

  for(var i = 0; i < width; i+=density) {
    let startPointX = i;
    let startPointY = 0;
    let endPointX = noise(xoff) * width;
    let endPointY = height;

    let randStrokeColor = getRandomElement(ColorPalette);
    stroke(randStrokeColor);
    line(startPointX, startPointY, endPointX, endPointY);

    xoff += 0.001;
  }
}

function getRandomElement(arry) {
  let randIndex = Math.floor(random(arry.length))
  return arry[randIndex];
}


// マウスクリックで更新
function mousePressed() {
  clear();
  setup();
}

// ウィンドウサイズ変更に応じて再描画
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}