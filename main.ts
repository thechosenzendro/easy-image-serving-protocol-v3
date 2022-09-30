basic.forever(function() {
    let data = []
    for (let i = 0; i < 25; i++) {
        data.push(Math.floor(Math.random() * 26))
    }

    let x = 0;
    let y = 0;
    for (let i = 0; i <= data.length - 1; i++) {
        if (x >= 4) {
            x = 0
            y += 1
        }
        if (data[i] >= 1) {
            let bright = data[i] * 10
            led.plotBrightness(x, y, bright)
        }
        if (data[i] == 0) {
            led.unplot(x, y)
        }
        if (x != 4) {
            x += 1;
        }
    }
    
    basic.pause(100)
})
