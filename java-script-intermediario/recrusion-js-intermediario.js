/*
    Recursion 
    --- NÃO É CONSIDERADO UMA BOA PRATICA ---

    Ex:
        function recurse() {
            if(condition) {
                recurse();
            }else{
                stop calling recurse()
            }
        }
 */

/*
    Default parameters
        Ao definir parâmentros padrões para uma função, podemos definir
        valores caso nenhum valor for passado ou este for indefinido

    Ex:
        funtion say(menssage = 'Hi') {
            console.log(menssage)
        }    

        say()
        say('Hello')
*/

/*
    Closures 
        Uma função possui acesso á todas as variáveis criadas em seu escopo e também ao 
        escopo pai. A mesma coisa acontece para funções dentro de funções

    Ex:
        let item1 = 1
        function funcao1() {
            let ite2 = 2
            function funcao2() {
                let item3 = 3
            }
        }    

        --func1, possui acesso á item1 e item2
        --func, possui acesso á item2 e item3
*/

//Recursion 

function contDown(number) {
    console.log(number);
    const newNumber = number -1

    if(newNumber > 0) {
        contDown(newNumber);
    }
}

contDown(10)

// Defalt parameters

function say(menssage = 'Hi') {
    console.log(menssage)
}    

say()
say('Hello')

import { somarNumeros } from "./escopo-js-intermediario";

const result = somarNumeros()

console.log(result)