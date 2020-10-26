var n1 = Number(window.prompt('Escreva o primeiro número: '))
var n2 = Number(window.prompt('Escreva o segundo número: '))
var n3 = Number(window.prompt('Escreva o último número: '))
var conta = (n1 + n2 + n3) / 3
total = parseFloat(conta.toFixed(2));
document.write(`A média entre ${n1}, ${n2} e ${n3} é... ${total}`)