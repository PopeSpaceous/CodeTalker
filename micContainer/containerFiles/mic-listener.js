//NOTE: THIS IS ITS OWN NODE MODULE. It will be mounted to a docker container
//independent of this VS Code extension. It has its own package.json file.

const mic = require('mic')
const fs = require('fs')
const spawn = require('child_process')

/* Info on the micInstance can be found here: https://www.npmjs.com/package/mic */
 var micInstance = mic({
    rate: '16000',
    channels: '2',
    debug: true,
    exitOnSilence: 6,
    fileType: '.wav',
    device: 'hw:0,0'
});

/*
- This is where we start the mic instance, using the above presets.
getAudioStream() returns a Transform stream. 
- We use a fs stream to create an output file.
- The micInputStream is then written to the outputFile, using pipe() from node's Stream API,
in order to open in Python.
- This file will get rewritten everytime the mic is stopped and started up again.
*/
var micInputStream = micInstance.getAudioStream();
const streamDest = __dirname + "/micAudio/output.wav";
const pyScriptLoc = __dirname + "/speech.py";
var outputFileStream = fs.createWriteStream(streamDest);
micInputStream.pipe(outputFileStream);


var startMic = new Promise(function (resolve, reject) {
    micInstance.start();
    setTimeout(function () {
        micInstance.stop();
        resolve();
    }, 6000)
    // outputFileStream.close();

})

startMic.then(function () {
    spawn.exec('python3 ' + pyScriptLoc, {cwd: __dirname}, (error, stdout, stderr) => {
    //spawn.exec('docker run -v ./micAudio:/src/micAudio -t argh ')
        console.log("going to gather the words...")
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Words you spoke: ${stdout}`);
    });

})
