let imageData: number[] = []
let xOfLed = 0
let yOfLed = 0
    for (let index = 0; index <= 24; index++) {
        imageData[index] = Math.random() * 100
    }
    for (let index2 = 0; index2 <= imageData.length - 1; index2++) {
        if (imageData[index2] != undefined) {
            led.plotBrightness(xOfLed, yOfLed, imageData[index2])
        }
        if (xOfLed == 4) {
            xOfLed = 0
            yOfLed += 1
        } else {
            xOfLed += 1
        }
    }