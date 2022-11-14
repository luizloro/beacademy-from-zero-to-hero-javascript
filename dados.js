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