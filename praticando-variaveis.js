// 1. Declare uma variável de nome person

var person
console.log(typeof person)

// 2. Que tipo de dado é a variavel acima ?
// console.log(typeof person) RETORNA O TIPO DA VARIÁVEL
//RESPOSTA = undefined


/*
   3. Declare uma variavel e atribua valores para cada um dos dados:
        * name: string
        * age: Number (interger)
        * weight: Number (float)
        * isAdmin: Boolean    
        * isMan: Boolean    
 */
        var name = "Luiz"
        var age = 28
        var weight = 64.5
        var isAdmin = true
        var isMan = true
/*
    4. A variável human abaixo é de que tipo de dados ?
        RESPOSTA = Objeto

    4.1 Atribua a ela as mesmas prioridades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem,:
        O humano <name> tem o peso <weight> kg.
        
*/

    let human = {
         name: "Luiz",
         age: 28,
         weight: 64,
         isAdmin: true,
         isMan: true
    }
    console.log(`O humano ${human.name} temo o peso ${human.weight}kg`)

 /*
    5. Declare uma variável do tipo Array, de nome humans e atribua a ela nanhuma valor, ou seja, somente o Array vazio.

  */   

    let humans = []

 /*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto 
    human da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado
        inserir ele no Array)   

 */  

 humans = [
    human
 ]
 console.log(humans)

 /*
    7. Coloque no console o valor da posiçao zero do Array acima
 */

    console.log(human[0])

 /*
    8.Crie um novo objeto human e coloque na posição 1 do Array Humans

 */   

    const newHuman = {
        name:"Eduardo",
        age: 21,
        weigh: 70,
        isAdmin: false,
        isMan: true

    }

    humans = [
        human,
        newHuman
    ]
//OU

    humnas[1] = newHuman.isAdmin

    console.log(human[1])


    /*

    9. Sem rodar o código responda o resultado da saída abaixo:
    
    a)
    console.log(a)
    var a = 1
    RESPOSTA = undefine

    b)
    let a 
    console.log(a)
    {
        let a = 2
        console.log(a)
    }
     console.log(a)
     RESPOSTA = undefine / 2 / undefine


     c)
      console.log(b)
      {
        let b = 3
        console.log(b)
    }   
    console.log(b) 
     RESPOSTA = undefine / undefine / undefine

     d) const c = 10
     {
        console.log(c)
        const c = 20
        console.log(c)
     }
     REPOSTA = ERRO / ERRO / ERRO
    
    
    */


