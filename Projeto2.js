var nome = (prompt('Informe seu nome: '));
var salario1 = Number(prompt('Informe seu atual salário: '));
var porcentagem = parseFloat('10');
var total = salario1 * (porcentagem/100);
var final = total + salario1
document.write(`Parabéns Sr(a) ${nome}, seu novo salário é ${final}`)