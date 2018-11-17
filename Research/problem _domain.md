## The problem:

Taking input from a microphone and passing it into VS Code presents multiple problems to be solved:

* **Talking to the Hardware**: VS Code and its extensions are meant to run across multiple platforms. The issue here being that different platforms have different operating systems, and different ways of grabbing audio from microphones. This means that a solution would ideally have to work on both Unix and Windows platforms. This might be accomplished with a library like [SOX](), which can be built natively. Alternately, a way to break this problem up would be to implement a solution for Unix, or Windows (whatever we find works first), and work on that one solution first.

* **Sending microphone input to a speech-to-text library:** This could be done a couple of ways: either through a node library that will take microphone input and parse it using speech to text locally on the machine, or by taking the microphone audio, and sending it to a web service (like google cloud speech-to-text) for translation.

* **Getting  the extension to listen for mic input, and write to the editor window:** We need to figure out how to get an extension to write code the position of the cursor in the editor by listening for and firinng a response to an event. In the early stagegs, This can be done independently from receiving microphone input (perhaps having a command pallete command write a hard coded hrase to the code window to start would be good).