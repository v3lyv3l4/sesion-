input.onButtonPressed(Button.A, function () {
    for (let Contador = 0; Contador <= Medir_arreglo; Contador++) {
        basic.showNumber(Arreglo_num[Contador])
    }
})
input.onButtonPressed(Button.B, function () {
    Arreglo_num.pop()
    Medir_arreglo += -1
})
let Medir_arreglo = 0
let Arreglo_num: number[] = []
Arreglo_num = [
5,
6,
2,
3,
7,
9
]
Medir_arreglo = Arreglo_num.length - 1
