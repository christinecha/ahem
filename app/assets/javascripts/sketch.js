var mic, fft;

function setup() {
  var myCanvas = createCanvas(340, 220);
   myCanvas.parent('visualizer');
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
};

function draw() {
   background(77,77,77);
   var spectrum = fft.analyze();

   beginShape();
   strokeWeight(5.0);
   strokeCap(ROUND);

    var waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(255,0,0); // waveform is red
    strokeWeight(1);
    for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
  endShape();
};
