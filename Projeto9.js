var saida = 1;
    var pedidos = [];

    function pedido () {

        while(saida == 1) {
            pedidos.push(prompt("Qual o pedido?"));
            saida = prompt("Deseja cadastrar outro pedido? aperte \"0\" para sair");

            if(saida == null || saida == "" || saida != 0) {
            saida = 1
            }
        }
        document.write(`Você fez ${pedidos.length} pedidos:`)
        for(let i = 0; i < pedidos.length; i++) {
            document.write(`</br>${pedidos[i]}`);
        }
        
    }

pedido();