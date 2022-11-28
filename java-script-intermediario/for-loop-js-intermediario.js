//For / Loop 
//Utilizado para fazer algo repetidamente até que uma condição seja atingida.

for(let numero = 0; numero <=10; numero ++) {
    
    if(numero % 2 == 0) {
        console.log(`Número ${numero} é PAR`)

    }else {
        console.log(`Número ${numero} é IMPAR`)
    }

}
//Retorna de 0 a 10 no console

const videoGames = [
    'Switch',
    'PS4',
    'XBOX'
]

for(let i = 0; i < videoGames.length; i++) {
    console.log(`Consoles nº ${i + 1
    } é ${videoGames[i]}`)

}