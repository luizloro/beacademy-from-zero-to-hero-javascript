//  Immediately invoked function expression oi IIEF
// (function helloWord() {
//     alert('Hello, Word!')
// }
// )();

// (function (menssage) {
//     alert(menssage)
// }
// )('Hello, Word');

//Arrow functiond

/* 
    Uma arrow function é uma alternativa compacta a uma expressão de função tradicional
    com algumas diferenças semânticas e limitações deliberadas no uso
*/

// TRADICIONAL
// function sum(a) {
//     return a + 100;
// }

//ARROW FUNCTION
// const sum = a => a + 100
// console.log(sum(3))

//EXEMPLO COM MAP

const materials = [
    'bola',
    'camisa',
    'short',
    'papel',
    'livro'
]

//Neste exemplo o .map percorre todos os elementos existentes em materials e retorna o comprimento
// de cada palavra existente no mesmo
//METODO TRADICIONAL DE FUNÇÃO
const newArra = materials.map(
    function showItens(materials) {
        return materials.length
    }
)

//ARROW FUNTION

const newArra2 = materials.map(materials => materials.length)
console.log(newArra2)