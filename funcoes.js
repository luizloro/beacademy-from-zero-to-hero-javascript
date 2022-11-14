// # Anatomia Function

/*  
function() {
    My code
} 
 */

//Exemplo 1

//Method
// function myFirstFunction() {
//     //Entra meu código
//     console.log("Olha a função!!")
// }

//Execução
//myFirstFunction()

 
//Função com Parâmetros e Argumentos  
// function sum(number1, number2) {
//     console.log(number1 + number2)

// }

//sum(1 , 2)

//Função com Retorno
// function myFirstFunctionWithReturn(num1, num2) {
//         let total = num1 + num2
//         return total
// }

//console.groupCollapsed(myFirstFunctionWithReturn(20,30))
// --> Total = 50

//Restaurante
// function meuPratoDeComida(comida1,comida2,comida3,comida4) {
//     return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`

// }

// const prato = meuPratoDeComida('Arroz', 'Feijão','Bife','Batata')
// console.log(prato)

// # Arrow Function, maneira mais moderna de cruar uma função

//# Exemplo
// const arrowFunction = () =>{
//     console.log('Arrow Function')
// }
// arrowFunction()

//Arrow Function
// const myFirstArrowFunction = (number1, number2) => {
//     let total = number1 + number2
//     return total;
// }
// const result = myFirstArrowFunction(20,80)
// console.log(result)


// Função Anônima 

// (function () {
//     console.log("From zero to hero s2")
// })()//Autoexecução

// setTimeout(() => {
//     console.log('Vou levar 3s para ser executado')
// }, 3000);// Função ANÔNIMA que atrasa a execução no tempo que o usuário determinar


//Parte 1

    // let assunto

    // function criarAssunto(assunto) {
    //     return assunto
    // }

    // console.log(criarAssunto());


//Parte 2

// let assunto = 'Estudar' // Variável RECEBE um valor

// function criarAssunto(assunto) {
//     return assunto //
// }

// console.log(assunto) // RESPOSTA = "Estudar"
// console.log(criarAssunto(assunto)); // RESPOSTA = "Estudar"


//Parte 3

// let assunto = 'Estudar' // Variável RECEBE um valor

// function criarAssunto(assunto) {
//     assunto = "Escutar Música" // Mudança de valor
//     return assunto //
// }

// console.log(assunto) // RESPOSTA = 'Estudar'
// console.log(criarAssunto(assunto)); // RESPOSTA = "Escutar Música"

//Parte 4 
// O que acontece dentro da função, se INICIA e FINALIZA, dentro dela.

// let assunto = 'Estudar' // Variável RECEBE um valor

// function criarAssunto() {// SEM PARÂMETRO
//     assunto = "Escutar Música" // Mudança de valor
//     return assunto //
// }

// console.log(assunto) // RESPOSTA = 'Estudar'
// console.log(criarAssunto(assunto)); // RESPOSTA = "Escutar Música"


//Hosting SÓ FUNCIONA DO MODO ANTIGO DE DECLARAÇÃO DA FUNCÃO, UTILIZANDO O METÓDO DE VARIÁVEL COM FUNÇÃO ATRIBUIDA NÃO FUNCIONA

// digaMinhaIdade()

// function digaMinhaIdade() {
//     return console.log(30)

// }


//Callback
                    //Function
function minhaFuncao(Callback) {
    console.log('Inicio da minha função')

    Callback(15, 15)

    console.log('Final da minha função')
}

minhaFuncao(
    (num1, num2) => {
        return console.log(num1 + num2)
    }
)
