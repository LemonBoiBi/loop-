let xx = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 8; index++) {
        xx += 1
        basic.showNumber(xx)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 8; index++) {
        xx += -1
        basic.showNumber(xx)
    }
})
basic.forever(function () {
	
})
