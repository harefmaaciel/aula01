// Exercício Guiado 4 - Funções Para Calcular Preço

/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/



function opcaoDePagamento (valor, desconto) {
        
       return valor - (valor  *  desconto) / 100
        
}

const formaDePagamento = 2
const precoDaEtiqueta = 200
    
    if (formaDePagamento === 1) {
        
       console.log(opcaoDePagamento(precoDaEtiqueta, 10))

    }else if (formaDePagamento === 2) {
        console.log(opcaoDePagamento(precoDaEtiqueta, 15))

    }else if (formaDePagamento === 3) {
        const emDuasVezes = precoDaEtiqueta / 2 
        console.log('Parcelou em 2x Parcelas')
    

    }else {
        const acimaDeDuasCezes = precoDaEtiqueta + avistaDebito
        console.log('Parcelou em mais de 2x Parcelas')

    }





 


 





