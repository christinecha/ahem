var mic, fft, recorder, soundfile;

var state = 0;
var drawing = 0;

function setup() {

  console.log("hello");
  var button = document.getElementsByClassName("record-button")[0];
  var clickedButton = new p5.Element(button);
  clickedButton.mousePressed(onMousePress);

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
   if (drawing == 1) {
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
  }
};

// $('record-button').on("click", mousePressed());
// new p5.Element('record-button',[])
//
// select('record-button')

function onMousePress() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  console.log("hello");
  if (state === 0 && mic.enabled) {
    drawing ++;
    // Tell recorder to record to a p5.SoundFile which we will use for playback
    recorder.record(soundFile);
    loop();
    //background(255,0,0);
    text('Recording now! Click to stop.', 20, 20);
    state++;
  }

  else if (state === 1) {
    drawing ++;
    recorder.stop(); // stop recorder, and send the result to soundFile
//    background(0,255,0);
    text('Recording stopped. Click to play & save', 20, 20);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    saveSound(soundFile, 'mySound.wav'); // save file
    state++;
  }
};
