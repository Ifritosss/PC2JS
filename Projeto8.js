var numeros
var contador = 1;
var soma = 0;

do {
    numeros = Number(prompt(`Digite o número ${contador}, soma atual = ${soma}`));
    soma += numeros;
    contador ++;
} while (contador < 21);
document.write(`O valor total do somatório é ${soma}`)