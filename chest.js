radio.onReceivedNumber(function (receivedNumber) {
    isRead = receivedNumber
})
let isRead = 0
radio.setGroup(6767)
isRead = 0
huskylens2.I2CInit()
huskylens2.switchAlgorithm(huskylens2.Algorithm.AlgorithmOcrRecognition)
basic.forever(function () {
    huskylens2.getResultTextRecognition()
    basic.pause(200)
    if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) > 0) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
    }
    if (isRead == 1) {
        if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 1) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("enviroment")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 2) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("bureaucracy")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 3) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("wednesday")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 4) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("maneuver")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 5) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("maintenance")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 6) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("association")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 7) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("safety")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 8) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("neighbourhood")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 9) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("convenience")
        } else if (huskylens2.cachedCenterTextResult(huskylens2.BasePropertyContentId.Id) == 10) {
            basic.showIcon(IconNames.Yes)
            radio.sendString("restaurant")
        }
    }
    isRead = 0
    basic.clearScreen()
})