// IF AND ELSE
// SE E SE NÃO

// let num = 10
// let num2 = 20
// let isAdmin = true


// > < == === != !==
// && (AND) || (OR) ! {NOT}
// if(num >= 10 && num2 >=10 ) {
//     console.log('VERDADE')
// }else{
//     consolw.log('FALSO')
// }
// if(isAdmin) {
//     console.log('Ele é admin, tem permissão')
// }else{
//     console.log('Ele não é admin')
// }

// if(num >= 10) {
//     console.log('Sou maior')
// }else if(num >= 10 && num2 <= 20) {
//     console.log('Segunda resposta verdade')
// }else{
//     console.log('Resposta falsa')
// }


//SWITCH 

// let myExpression = '1'
// switch (myExpression) {
//     case 'a':
//         console.log('Apertou o A')
//         break
//     case 'b':
//         console.log('Apertou o B')
//         break
//     case 'c':
//         console.log('Apertou o C')
//         break
//     case 'd':
//         console.log('Apertou o D')
//         break
//     default:
//         console.log('Você apertou outra tecla', myExpression)
//         break

// }

// //Calculadora utilizando SWITCH
// function calc(num1, operator, num2) {
//     let result

//     switch (operator) {
//         case '+':
//             result = num1 + num2
//             break

//         case '-':
//             result = num1 - num2
//             break

//         case '*':
//             result = num1 * num2
//             break

//         case '/':
//             result = num1 / num2
//             break

//         default:
//             console.log('Digite uma operação VALIDA')


//     }
//     return result
// }

// console.log(calc(4,'-', 2))


//Throw and Try Catch

//Saber minha idade
function myAge(myAge){
    if(!myAge) {
        throw 'Você precisa colocar a idade!'
    }

    console.log('Eu executei depois do erro!')
}

try{
    myAge()
    console.log('Já tratei e deu certo')
}catch(erro){
    console.log(erro)
}

console.log('Programa continua')