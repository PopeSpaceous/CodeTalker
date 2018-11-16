import speech_recognition as sr
import os 

r = sr.Recognizer()
if not os.path.isdir("./micAudio"):
    os.mkdir("./micAudio")
test = sr.AudioFile('./micAudio/output.wav')
with test as source:
    audio = r.record(source)

# Send the result of the speech recognition to the stdout
# JavaScript will then take this stdout as a string returned by child_process
# recognize_google() is the webkit API that we cannot use in Electron :)
print(r.recognize_google(audio))