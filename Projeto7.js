var numeros
var contador = 1;
var soma = 0;

while (contador < 21) {
    numeros = Number(prompt(`Digite o número ${contador}, soma atual = ${soma}`))
    soma += numeros
    contador ++
}
document.write(`A soma de todos os números é ${soma}`)