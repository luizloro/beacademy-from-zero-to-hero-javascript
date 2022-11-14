// Type Conversion

//Convertendo STRING para NÚMERO e NÚMERO para STRING
console.log(Number('9')  + 24);
console.log(String(9) + ' Converteu Diacho!!');

//Contar CARACTERES
let oneWord = 'Moacir' // 6 letras
console.log(oneWord.length) // ?????

//Maiúsculas e Minúsculas
let pharse = 'Olha o bonde da From To Hero uaaaaaaaaaauuuuu'
console.log(pharse.toUpperCase())
console.log(pharse.toLowerCase())

//Convertendo para INTEIRO OU VICE-VERSA
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

let intergeNumber = 24
console.log(parseFloat(intergeNumber))

//Trabalhando com CASAS DECIMAIS, números depois da virgula
let niceNumber = 24.54648
console.log(niceNumber.toFixed(2))
//Alteração do caractere utilizando REPLACE onde o primeiro itém em ' ' é o que queremos alterar e o segundo itém entre ' ' será o que tomará seu lugar
console.log(niceNumber.toFixed(2).replace('.', ','));

//PRECISÃO NÚMERICA
let otherNumber = 129/32
console.log(Number(otherNumber.toPrecision()))

//Manipulando STRING e ARRAYS
/*
    Separando um texto que contem espaços, em um novo array onde
    cada TEXTO é uma POSIÇÃO do ARRAY    
*/

let newPharse = 'Fala meus queridos e queridas 😎'
console.log(newPharse)
let newPharseToArray = newPharse.split(' ')
console.log(newPharseToArray)

//CONVERTENDO novamente o texto para STRING
// .join(" ") -> Permite que eu gere separações { -, _ / ''}

let phraseModify = newPharseToArray.join(" ")
console.log(phraseModify)

//Verificando se contém palavras ou letras NÃO RECOMENDADO UTILIZAR O .includes() COM OBJETO POIS ELE NÃO CONSEGUE ADENTRAR O OBJETO NO ARRAY

// let stringInclude = "Veem em min From to Hero, veeem CentraliT 😍"
// console.log(stringInclude.includes("From")) //true
// console.log(stringInclude.includes("teste")) //false

// //Objetos

// let arrayInclud = [
//     "FromToHero",
//     "veem",
//     "ne min",
//     "Meu amor",
//     {
//         firstName: "From",
//         lastName: "ToHero"
//     }
// ]

// console.log(arrayInclud.includes("veem")) //true
// console.log(arrayInclud.includes("teste")) //false


// //String startWith (FAZ A BUSCA DO CARACTERE QUE INICIA A STRING)
// console.log(stringInclude.startsWith("Ve"))

// //String endstWith (FAZ A BUSCA DO CARACTERE QUE FINALIZA A STRING)
// console.log(stringInclude.endsWith("iT"))

//TRANSFORMANDO um ARRAY em CARACTERE (Alternativa ao metodo SPLIT)
let wordToArray = 'Quem ta gostando diz Hey!!'
console.log(Array.from(wordToArray)); 