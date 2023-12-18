function nome (nome){
    return `Seu nome é ${nome}`
}
function verificaIdade (idade) {
    if (idade >= 18) {
        console.log('Voce é maior de Idade ' + nome('Haref'))
    }else {
    console.log(`${nome('Haref')} Voce tem ${idade} anos é menor de idade `)
    }
}

verificaIdade(15)
