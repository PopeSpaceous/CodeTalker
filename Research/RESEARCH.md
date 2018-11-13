This is a research file to store information about possible code construction of CodeTalker's Visual Studios Code Extention. 

# Speech to Text (StT) APIs and Software: #

## Potential Candidates: ##

#### CMUSphinx #####

[PocketShpinx](https://github.com/cmusphinx/pocketsphinx)
Description: a lightweight speech recognition engine, specifically tuned for handheld and mobile devices, though it works equally well on the desktop.
**Needs SphinxBase**
[Sphinx Tutorial](https://cmusphinx.github.io/wiki/tutorialpocketsphinx/)
We were able to get this working and set up however, the speech recognition was not very accurate and the setup does take a while to get going. 
Sample StT Test
We said, “Hello sphinx, how are you doing? This is just a test.” 
Sphinx heard, “for the to it or who are not looking is the biggest test”



#### Kaldi ####

[Kaldi](https://github.com/kaldi-asr/kaldi)
Description: Kaldi is a toolkit for speech recognition written in C++ and licensed under the Apache License v2.0. Kaldi is intended for use by speech recognition researchers.
Notes: The build process for Windows is complex. There are 2 routes either installing cygwin a unix based system in windows, or installing and compiling OpenFST and running through an adruous kaldi setup. 
We tried the cygwin route following instructions. **(watch out a full cygwin build is over 70+GB install so don't do that)**
We weren't able to get it fully up and running, so we continued on, however we wont rule this out yet. 
Links: [Install gcc on windows Cygwin](https://preshing.com/20141108/how-to-install-the-latest-gcc-on-windows/)   
[Setup Cygwin](http://www.ntu.edu.sg/home/ehchua/programming/howto/cygwin_howto.html)




#### Sonus And Snowboy ####

[Sonus: Voice User Interface](https://github.com/evancohen/sonus/)
[Snowboy: Hotword Detection](https://github.com/Kitt-AI/snowboy)
Notes: We haven't tested this route because they are unix based only. They may be useful in the future so we'll make note of them here.
We found them in a [chat in this repository](https://github.com/noffle/electron-speech/issues/9)



-----------------------------------------------------------------------------------------
## Helpful Links: ##

[Emscripten](https://github.com/kripken/emscripten)
Description:Emscripten is an LLVM-to-JavaScript compiler. It takes LLVM bitcode - which can be generated from C/C++.
Usage: We could use this to talk from a c/c++ application to our javascript extension.


[Voice Code](https://github.com/VoiceCode/vscode-voicecode)
Description: This is an extension that allows use of voicecode.io which in turn uses dragon naturally speaking
Notes: This is helpful to see how to link StT to our extension.


[VSCode Voice Commands Extension ](https://github.com/lanly-dev/VSCode-VoiceCommands-Extension)
Description: This is an extension that take basic voice commands
Notes: Might be worth contacting and talking to. They have support for CMUSphinx, and Microsoft Speech Platform. 

[Calling C++ from NodeJS](https://medium.com/@tarkus/how-to-call-c-c-code-from-node-js-86a773033892)
Description: Call C/C++ code or use a native library from a Node.js app.
Usage: We could use this to talk from a c/c++ application to our javascript extension.

[Event Listeners In VSCode JS](https://code.visualstudio.com/docs/extensions/example-word-count#_subscribing-to-events)
Usage: Detect Change in text, used for replacement of text commands, eg. (h5 tag   ->   <h5></h5>)

[VSCode code listing](https://code.visualstudio.com/docs/extensionAPI/vscode-api)
Description: Shows a listing of classes and methods to use for programming. 

-----------------------------------------------------------------------------------------
## Defunct Speech to text for Chromium and Electron ##

[**WEBKITS NOT SUPPORTED**](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-html5/JJe6KD7-bb8)

#### Web Speech API ####

[Mozilla Web Speech API:](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#Browser_compatibility)

Pros: 	-Simple to use, uses webkits in a browser to use voice commands. 
		-Written in Javascript so syntax should be similar to extension.js that we use.

Cons: 	-Needs to be connected to the internet to work. 
		-Not sure yet if we can connect a WebAPI to our extension Needs more research.
		
**Result: Webkits are not supported by chromium and therefor Electron (which VScode is written in)**

#### NPM Speech-to-text ####

[npm Speech-to-text](https://www.npmjs.com/package/speech-to-text)
looked promising however ran into the same issue that the Webkits (which this uses) are **not supported**

#### Julius ####

[Julius](https://github.com/julius-speech/julius)
Description: Mostly Japanese StT, however there may be a small english Library. 
Last activity was 2-4 years ago. 

#### Random Web Apps ####

Cross Platform apps: Not openSource   All of them likely use webkit and are online. 
[VoiceNotebook](https://voicenotebook.com/)
[SpeechTexter](https://www.speechtexter.com/)
[Speechnotes](https://speechnotes.co/)


-----------------------------------------------------------------------------------------
Random Markup regex editors
Regex Editor:
Find: (http[^\s-]*) //gets all http links
Replace: []\(\1\)   //replaces links that previous find found. (works in notepad++)
