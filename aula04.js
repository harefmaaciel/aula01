function calculaIMC (peso, altura) {
    return peso / (altura * altura)
    
}

function classificarIMC (imc) {
    if (imc < 18.5) {
        return 'Cuide-se, você ta Abaixo do Peso!'

    }else if (imc >= 18.5 && imc < 25) {
        return 'Parabéns...Peso Normal!'

    }else if (imc >= 25 && imc < 30) {
        return "Cuide-se, você ta acima do peso!"

    }else if (imc >= 30 && imc < 40) {
        return "Alerta, você ta Obeso!"  
    }else {
        return "Aleta Total...Obesidade Morbida!"
    }
}

//nosso main 
(function  () {
    const peso = 80
    const altura = 1.73
    const resultadoIMC = calculaIMC(peso, altura).toFixed(2)
    console.log(resultadoIMC)
    const resultIMC = classificarIMC(calculaIMC(peso, altura))
    console.log(resultIMC)

})()






