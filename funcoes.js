// # Anatomia Function

/*  
function() {
    My code
} 
 */

//Exemplo 1

//Method
function myFirstFunction() {
    //Entra meu código
    console.log("Olha a função!!")
}

//Execução
myFirstFunction()

 
//Função com Parâmetros e Argumentos  
function sum(number1, number2) {
    console.log(number1 + number2)

}

sum(1 , 2)

//Função com Retorno
function myFirstFunctionWithReturn(num1, num2) {
        let total = num1 + num2
        return total
}

console.groupCollapsed(myFirstFunctionWithReturn(20,30))
// --> Total = 50