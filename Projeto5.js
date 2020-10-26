var nome = prompt('Qual o nome do aluno?');
var nota1 = Number(prompt('Qual a primeira nota?'));
var nota2 = Number(prompt('Qual a segunda nota?'));
var nota3 = Number(prompt('Qual a terceira nota?'));
var conta = (nota1 + nota2 + nota3) / 3;
var total = parseFloat(conta.toFixed(1));
if (total >= 8){
    document.write(`A média do aluno ${nome} é ${total}, e ele está APROVADO!`)
} else {
    document.write(`A média do aluno ${nome} é ${total}, e ele está REPROVADO!`)
}