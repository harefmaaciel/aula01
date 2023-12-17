function percentualJuros (valor, percentual) {
    const valorDeAcrescimo = (valor * percentual) / 100  
    return valor + valorDeAcrescimo
}

const valor = 1000
const percentual = 10
const resultado = percentualJuros(valor, percentual)
console.log(`Seu saldor total é ${resultado}`)





