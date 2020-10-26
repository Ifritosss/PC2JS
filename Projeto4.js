var valor = Number(prompt('Qual o valor total do produto?'))
var parcelar = (prompt('Deseja parcelar em quantas vezes? Dentre 3 e 5'))
if (parcelar == 5){
    var porcentagem5 = parseFloat('20');
    var cinco = valor * (porcentagem5/100);
    var total5 = cinco + valor;
    document.write(`O valor total do produto parcelado em 5x é... ${total5}`);
} else if (parcelar == 3) {
    var porcentagem3 = parseFloat('10')
    var tres = valor * (porcentagem3/100);
    var total3 = tres + valor;
    document.write(`O valor total do produto parcelado em 3x é... ${total3}`)
} else {
    alert('ESSE VALOR NÃO ESTÁ DISPONÍVEL PARA PARCELA')
    document.location.reload(true)
}