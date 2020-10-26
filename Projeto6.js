var n1 = Number(prompt('Digite o primeiro número'))
var n2 = Number(prompt('Digite o segundo número'))
var n3 = Number(prompt('Digite o código de seleção (1 a 3)'))
if (n3 == 1){
    var soma = n1 + n2
    document.write(`A soma dos números é ${soma}`)
} else if (n3 == 2){
    var mult = n1 * n2
    document.write(`A multiplicação dos números é ${mult}`)
} else if (n3 == 3){
    var divi = n1 / n2
    var div = parseFloat(divi.toFixed(2))
    document.write(`A divisão dos números é ${div}`)
} else {
    alert('Esse código não está disponível')
    document.location.reload(true);
}