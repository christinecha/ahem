var mic, fft, recorder, soundfile, waveform, spectrum, energybass, energylowmid, energymid, energyhighmid, energytreble;
var state = 0;
var drawing = 0;
var button = 'false'

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
   if (drawing == 1) {
     background(77,77,77);
     spectrum = fft.analyze();
     var max = Math.max.apply(Math, spectrum);
     var freq = spectrum.indexOf(max);
     console.log(freq);
  }
};

function mousePressed() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled && button) {
    drawing ++;
    loop();
    state++;
  }

  else if (state === 1) {
    drawing ++;
    state++;
  }
};

function findnearestfreq(var freq) {
  for (var i = 0; i < )
};
