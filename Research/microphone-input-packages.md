## Purpose of Document:

To record packages and potential strategies that can potentially be used to take mic input from a user's device and parse it to a stream or audio file for later processing

## Sets of packages:

### mic-stream, arecord, and sox:

One approach to try to get this to work would be to use SOX or arecord ( command line programs that allows you to pull mic audio in to a file or stream) and mic-stream to pull in streaming audio from the microphone to a Node application (ie, our VS Code  extension). 

**Of greatest interest** is the fact that this npm package changes its behaviour based on the operating system you're running. In order to run, mic stream needs a version of sox cli installed ('darwin' style unix operating systems) or arecord (linux systems like those found on macbooks products). The mic-stream package actually works in part by calling wither the SOX program, or arecord from the command line **with help from Node's [child_process.spawn()](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)**, and selects a SOX process to run based on the local machine's operating system with [process.platform](https://nodejs.org/api/process.html#process_process_platform). process.platform can identify a range of operating systems, so it may be helpful to incorporate into our code to determine what software to use to pull mic audio.

This requires that the machine itself be listening to its microphone. Luckily, there are some Node packages that allow us to do this:

Linux npm package for pulling in mic audio with help from SOX:
https://www.npmjs.com/package/mic-stream
^ on LINUX: requires alsa-utils to be installed, and requires rec from [sox npm package](https://www.npmjs.com/package/sox) to be installed.


#### Building SOX natively for greater cross platform compatibility?

There is also a way to download SOX from an archive, and get it to build natively on your respective operating system. This was a consideration before it was realized that SOX was available as an npm package (and would be complicated because you would have to detect the operating system before deciding what commands to use to build the archive).


TO BUILD SOX FROM SOURCE FILES (probably overcomplicates things):
Download archive at: http://sox.sourceforge.net/
SOX can be built on both windows and POSIX systems, and this download provides an archive that can be built on multiple platforms (but you need to set things up so that it will build).

This type of build requires autotools to be installed: https://askubuntu.com/questions/430706/installing-autotools-autoconf
^to install SOX, download the archive, extract, it, and open the INSTALL file for  build instructions. T


for Ubuntu users: check if a package is installed:

> dpkg -l {package_name}

Alternately, SOX is available through various package managers. For instance, if your Unix distro uses apt-get:

> sudo apt-get install sox




