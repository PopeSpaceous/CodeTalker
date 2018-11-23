# CodeTalker
A Visual Studio Code Add-on that allows Speech to HTML code. 

Why is it needed? 
Many people have trouble coding when trying to use voice commands. Our vision is to build a comprehensive extension to enable speech to text coding. 
Here is a current issue for VSCode about dictation support: 
[https://github.com/Microsoft/vscode/issues/40976](https://github.com/Microsoft/vscode/issues/40976)

Visit the wiki for [a list of helpful research links](https://github.com/PopeSpaceous/CodeTalker/wiki/Helpful-Links). 

Current Loose Goal Timeline:

Get a barebones Extension to VSCode up -> Add Voice to Text Feature to Extension (Minimal version to see how it works) -> Add our code for command issues with corresponding HTML converters.

----------------------------------------------------------------------------
Setting up the barebones extention:

Our extension is based off of this one currently
Followthe guide @ https://code.visualstudio.com/docs/extensions/example-hello-world

In order to test the functionality of this app, you need to open codeTalker > hit f5. This should bring up a new window/instance of VS Code with the label: [Extension Development Host] at the top of the window. In this window, enter the command pallette: ctrl + shift + p > type in a command (In this case it's simply 'hello world' ). In order to change the name of this command, we can edit a package.json file, [seen here](./package.json), and change the 'title' property to a new name. This serves as the name of the command that we enter into the command pallete (opened with Ctrl + Shift + P) to run the extension. 

-- We can change this stuff asap.

Another thing to note. I usually run a Linux environment, with VSCode v 1.28.x
1.28 MUST be installed to debug the extension (any platform). So make sure that is the case.
Linux machines may be unable to properly open 'Extension Development' window when debugging the extension. There has been success developing on an Ubuntu 18.04 VM. If you have issues with your environment you may want to switch over to a Windows machine, troubleshoot issues with your particular Linux distro, or try a different distro. 

----------------------------------------------------------------------------

## Developing the extension with Docker:

The required Nodejs scripts for capturing microphone audio, along with the python script that parses text from the audio have now been moved to run in a Docker container.

**Note: the current implementation in extension.js only mounts microphone hardware for Unix style systems where hardware is mounted to the diretory system**

### Start by building the Docker Image

- **Start by installing Docker** if you don't have it on your system already: [Installation instructions for a variety of systems can be found in this document](https://docs.docker.com/install/#supported-platforms_)

- **Build the Docker image:** Navigate to CodeTalker/micContainer, and execute the command:
> docker build -t mic-container .

Don't forget the "." at the end of this command since it indicates you want to use the Dockerfile in the current directory. The first build will take a few minutes, but any later builds will be faster since Docker caches parts of the build process.


## Test Run the Extension to see if it works:

- After building the docker image, you should be able to test the VS Code extension. 
- In an instance of VS Code with the code repo open, hit 'F5' to start debugging. This should bring up a new VS Code window labelled "[Extension Development Host]". 
- To launch the extension, bring up the command pallette (Ctrl + Shift + P).
- Type "Code Talker" into the pallette and hit enter. Alternately, you can select "Code Talker" from the dropdown under the command pallette since it should be the first option.
- Start talking into your computer's microphone. **Currently, the extension will exit after 6 seconds of silence.**

**All speech to text code is now located in the micContainer/containerFiles directory to be sent off to Docker. Any other code is located in the repo's root folder.** The main code for the extension is located in extension.js. The micContainer/containerFiles directory is mounted to the Docker vm, so all you have to do is save your changes to the scripts after you've edited them, and they will be mounted to an instance of a Docker container when you run the extension. Since this directory contains node modules independent from the the rest of the extension's code, it has it's own package.json file for its own dependencies.


- Currently all shared changes to the docker image come from the Dockerfile since no images are provided/hosted. Note also that in extension.js, we mount both the mic hardware (/dev/snd) and the micContainer/containerFiles directories when we run the docker image. This means that if you want to run the image yourself in the terminal with everything mounted, you will need to determine the correct command there based on your computer's file structure. Here's an example:

> docker run -v /dev/snd:/dev/snd -v /home/me/Documents/openSrc/CodeTalker/CodeTalker/micContainer/containerFiles:/src/micListener -it --privileged mic-container

The "-it" flag runs the container, and puts you in a terminal for the container. Use the "exit" command to exit and shut down the container.


----------------------------------




Add research notes as a wiki page. 


Here is the [Slack group chat](https://join.slack.com/t/codetalkerworkspace/shared_invite/enQtNDcyMjQ4MjYzNzMwLTYzMjM4MDUwMzAzYTc1MjBhNDNjZWM5MGU5Y2FkODUzMWZjM2M4NjJlZGZkYjIwNTNlYzM1NGQxOGYzNDUyOTY) where we discuss any issues and suggestions regarding this project.
