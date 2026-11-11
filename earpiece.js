input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    billy.say(receivedString)
})
voiceRecognition.init()
voiceRecognition.setVolume(7)
radio.setGroup(6767)
serial.redirectToUSB()
billy.configureVoice(
100,
80,
120,
200
)
music.setVolume(255)
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
            radio.sendNumber(1)
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})