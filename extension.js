// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const mic = require('mic')
const fs = require('fs')
const spawn = require('child_process')
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "codetalker" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Start using your microphone!');

        /* 
        The mic instance is handled as a JSON input, whereby we can set the defaults for the microphone.
        I had to brute force the device name, because the default 'mic' module did not pick it up.
        Also, it had channels set to MONO, which my computer does not have as it's default...the default is Stereo (2)
        */

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
        var outputFileStream = fs.createWriteStream('output.wav');
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
            spawn.exec('python repos/CodeTalker/speech.py', (error, stdout, stderr) => {
                console.log("going to gather the words...")
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`Words you spoke: ${stdout}`);
            });
        })

    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;