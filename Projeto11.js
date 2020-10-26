function eImpar(numero) {
    for(let i = 0; i < 101; i++) {

        if(i%2 == 0) {
            document.write(`O número ${i} ^2 = ${Math.pow(i, 2)}</br>`);
        }

    }
}
eImpar()