// Lista de produtos
var produtos = [{id: 100, nome: "Cachorro Quente", preço: 1.70}, {id: 101, nome: "Bauru Simples", preço: 2.30},
                {id: 102, nome: "Bauru com Ovo", preço: 2.60}, {id: 103, nome: "Hamburguer", preço: 2.40},
                {id: 104, nome: "Cheese Burguer", preço: 2.50}, {id: 105, nome: "Refrigerante", preço: 1.00} ];

function compra () {

    let codigoProduto = prompt('Qual o código do produto?')
    let quantidade = prompt('Qual a quantidade desejada?')

    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].id == Number(codigoProduto)) { //busca o id do produto dentro do array até encontrar o ID colocado pelo usuário.
             document.write(`Você adquiriu ${quantidade} ${produtos[i].nome}, o total da sua compra é R$${produtos[i].preço * quantidade}.`);
             break
        } else {
            alert(`produto ${codigoProduto} não encontrado. Verifique se inseriu um código válido e tente novamente.`);
            console.error("Esse produto não foi encontrado");
            document.location.reload();
            return null
        }
    }

    return null;
}
compra();