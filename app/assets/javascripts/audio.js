var mic, fft, recorder, soundfile;

var state = 0;
var drawing = 0;

function setup() {
  var myCanvas = createCanvas(340, 220);
   myCanvas.parent('visualizer');
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   recorder = new p5.SoundRecorder();
   fft.setInput(mic);
   recorder.setInput(mic);

   soundFile = new p5.SoundFile();
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
    stroke(255,255,255); // waveform is red
    strokeWeight(2);
    for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
  endShape();
};

// function mouseClicked() {
//   // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
//   if (state === 0 && mic.enabled) {
//     drawing ++;
//     // Tell recorder to record to a p5.SoundFile which we will use for playback
//     recorder.record(soundFile);
//     loop();
//     //background(255,0,0);
//     state++;
//   }
//
//   else if (state === 1) {
//     drawing ++;
//     recorder.stop(); // stop recorder, and send the result to soundFile
// //    background(0,255,0);
//     state++;
//   }
//
//   else if (state === 2) {
//     state++;
//   }
// };
