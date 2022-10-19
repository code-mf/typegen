p5.disableFriendlyErrors = true; // disables FES

var slider;
var slider2;
var slider3;
var slider4;
var slider5;
var inp;
var colorPicker;
var colorPicker2;
var sel;
var sel2;
var button;

var a; // number of objects X
var b; // space between X
var c; // total width of objects X
var d; // left/right margin
var e; // number of object Y
var f; // space between objects Y
var g; // total height of objects Y
var h; // top/bottom margin

var textin = "hello";

//Runs One Time
function setup() {
  createCanvas(windowWidth, windowHeight, SVG);

  //slider setup section
  //slider 1 ---
  slider = createSlider(0, 20, 2, 1);
  slider.position(10, 40);
  slider.style("width", "100px");
  //slider 2 ---
  slider2 = createSlider(0, 20, 3, 1);
  slider2.position(10, 70);
  slider2.style("width", "100px");
  //slider 3 ---
  slider3 = createSlider(1, windowWidth, 221, 1);
  slider3.position(10, 100);
  slider3.style("width", "100px");

  slider4 = createSlider(1, windowHeight, 159, 1);
  slider4.position(10, 130);
  slider4.style("width", "100px");

  slider5 = createSlider(1, 600, 87, 1);
  slider5.position(10, 160);
  slider5.style("width", "100px");

  inp = createInput(textin);
  inp.position(10, 10);
  inp.size(100);
  inp.input(myInputEvent);

  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(10, 190);
  colorPicker.style("width", "100px");

  colorPicker2 = createColorPicker("#92D3CA");
  colorPicker2.position(10, 230);
  colorPicker2.style("width", "100px");

  sel = createSelect();
  sel.position(10, 270);
  sel.option("Avenir");
  sel.option("Futura");
  sel.option("Courier New");
  sel.option("Rockwell");
  sel.selected("Avenir");
  sel.style("width", "100px");

  sel2 = createSelect();
  sel2.position(10, 300);
  sel2.option(NORMAL);
  sel2.option(ITALIC);
  sel2.option(BOLD);
  sel2.option(BOLDITALIC);
  sel2.selected(NORMAL);
  sel2.style("width", "100px");

  button = createButton("Download");
  button.position(10, 330);
  button.mousePressed(saveit);
  button.style("width", "100px");

  //sel.changed(mySelectEvent);
}

// Runs as a loop
function draw() {
  clear();
  //this our background color
  background(colorPicker.color());

  //This is a variable to hold our slider value
  let val = slider.value();
  // variables for second and third sliders
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();
  let val5 = slider5.value();
  
  textStyle(sel2.value());
  textFont(sel.value());
  textAlign(CENTER, CENTER);
  fill(colorPicker2.color());
  textSize(val5);

  a = val;
  b = val3;
  c = a * b;
  d = (windowWidth - c) / 2;
  e = val2;
  f = val4;
  g = e * f;
  h = (windowHeight - g) / 2;

  for (let i = d; i <= windowWidth - d; i += b) {
    for (let y = h; y <= windowHeight - h; y += f) {
      text(textin, i, y);
    }
  }
  
}

function myInputEvent() {
  textin = this.value();
}

function saveit() {
  save("textGridGenerator.svg"); // give file name
}

function windowResized() {
  clear();
  resizeCanvas(windowWidth, windowHeight);
  
}
