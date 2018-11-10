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

In order to test the functionality of this app, you need to open codeTalker > hit f5 > enter the command prompt: ctrl + shift + p > type in a command (In this case it's simply 'hello world' ). In order to change this command, we edit a package.json file, seen here
-- We can change this stuff asap.

Another thing to note. I usually run a Linux environment, with VSCode v 1.28.x
1.28 MUST be installed to debug the extension (any platform). So make sure that is the case.
Linux machines are unable to properly open 'Extension Development' mode when debugging the extension. So switch over to a Windows machine.:

----------------------------------------------------------------------------


Add research notes as a wiki page. 


Here is the [Slack group chat](https://join.slack.com/t/codetalkerworkspace/shared_invite/enQtNDcyMjQ4MjYzNzMwLTYzMjM4MDUwMzAzYTc1MjBhNDNjZWM5MGU5Y2FkODUzMWZjM2M4NjJlZGZkYjIwNTNlYzM1NGQxOGYzNDUyOTY) where we discuss any issues and suggestions regarding this project.
