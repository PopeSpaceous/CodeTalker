import speech_recognition as sr

r = sr.Recognizer()
test = sr.AudioFile('/home/stephen/output.wav')
with test as source:
    audio = r.record(source)

# Send the result of the speech recognition to the stdout
# JavaScript will then take this stdout as a string returned by child_process
# recognize_google() is the webkit API that we cannot use in Electron :)
print(r.recognize_google(audio))