//Estruturas de REPETIÇÃO

//For
// for (let i = 1; 1<=10; i++) {
//     console.log(i)
// }

// for(let i = 1; i<=10; i++) {
//     if(i === 5) {
//         break
//         //contiue
//     }
//     console.log(i)
// }

//While (ENQUANTO)
// let itarator = 1
// while(itarator <=20) {
//     console.log(itarator)

//     //INCREMENTO DA VARIÁVEL
//     itarator++

// }




//For Of (Exemplo com Array)

// let number = [1,2,3,4,5,6]
// for (num of number) {
//     //num = number (For Of)
//     //For Of (Valores do Array)
//     if(num > 4) {
//         console.log(num)
//     }
// }

//For In
// let animals = {
//     nome: 'Leão',
//     weight: 200,
//     age: 4
// }

//for(item in animals) {
    //Tipo 1 para capturar valores de objeto em um For In
  //  console.log(animals['nome'])
    //Tipo 2 para capturar todo o objeto
   // console.log(animals)
    //Tipo 3 mostra todos os valores dentro das propriedades
//    console.log(animals[item])
    //Tipo 4 captura valores individuais das propriedade de um objeto
   // console.log(animals.name)
//}


let arrayName = [
    'Jenifer',
    'Luan',
    'Regis',
    'Moacir'
]

for (item in arrayName) {
    //console.log(arrayName) // Mostra todo array
    //console.log(arrayName[item]) // Mostra todos os valores
    //console.log(arrayName[2]) // Mostra diretamente um vetor
    //console.log(item) // Index dos vetores (Posições)
}