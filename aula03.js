function percentualJuros (valor, percentual) {
    const valorDeAcrescimo = (valor * percentual) / 100  
    return valorDeAcrescimo
}

const valor = 1000
const percentual = 10
const resultado = percentualJuros(valor, percentual)
console.log(`${percentual}% de ${valor} é = ${resultado}`)
console.log(`Seu saldo Total é: ${valor - resultado} ` )




