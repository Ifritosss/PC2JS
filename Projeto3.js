var n1 = Number(prompt('Escreva o primeiro número: '));
var n2 = Number(prompt('Escreva o segundo número: '));
if (n1 == n2) {
    var total = "Somar"
} else {
    var total = "Multiplicar"
}
if (total == "Somar") {
    var soma = n1 + n2
    document.write(`O valor foi somado para... ${soma}`)
} else{
    var mult = n1 * n2
    document.write(`O valor foi multiplicado para... ${mult}`)
}