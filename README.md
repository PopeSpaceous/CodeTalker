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


Add research notes as a wiki page. 


Here is the [Slack group chat](https://join.slack.com/t/codetalkerworkspace/shared_invite/enQtNDcyMjQ4MjYzNzMwLTYzMjM4MDUwMzAzYTc1MjBhNDNjZWM5MGU5Y2FkODUzMWZjM2M4NjJlZGZkYjIwNTNlYzM1NGQxOGYzNDUyOTY) where we discuss any issues and suggestions regarding this project.
