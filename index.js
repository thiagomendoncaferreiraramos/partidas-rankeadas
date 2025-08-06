let desafios =  [true, true, true, true, true, true, true, true, true, true, true]
let qVit = funNivel(desafios)
let qDer = 10 * desafios.length - qVit

let saldoDeVitorias = qVit - qDer

let nivelVar = nivel(qVit)

console.log("O Herói tem de saldo de " + saldoDeVitorias + " está no nível de " + nivelVar)



function funNivel(vitArray){

    var i
    var numVit = 0
    for(i = 0; i < vitArray.length; i++){
        if(vitArray[i]){
            numVit += 10
        }
    }

    return numVit

}

function saldo(numVit, numDer){
    return numVit - numDer
}

function nivel(numVit){
    if(numVit < 10){
        return "Ferro"
    }else if(numVit <= 20){
        return "Bronze"
    }else if(numVit <= 50){
        return "Prata"
    }else if(numVit <= 80){
        return "Ouro"
    }else if(numVit <= 90){
        return "Diamante"
    }else if(numVit <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
}