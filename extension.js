// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const mic = require('mic')
const fs = require('fs')
const spawn = require('child_process')
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

function activate(context) {
    var mountDir = __dirname + "/micContainer/containerFiles:/src/micListener";

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
        
        //the way this mounts a mic will only work on linux based machines that have microphone hardware mounted as /dev/snd!!!
        spawn.exec('docker run -v /dev/snd:/dev/snd -v ' + mountDir + ' --privileged mic-container npm start', (error, stdout, stderr) => {
            //spawn.exec('docker run -v ./micAudio:/src/micAudio -t argh ')
                console.log("going to gather the words...")
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`Words you spoke: ${stdout}`);
            });
//old code was here
    });
    
    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;