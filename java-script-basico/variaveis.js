//Declarar 

// var name
// let name2
// const name3 = "Meu Nome"

// As variáveis n JavaScript são fracamente tipadas e dinamica ex:
// let luan = 'Luan'
// console.log(name)

// name = 32
// console.log(name)

// name = "Carlos"
// console.log(name)

//Variáveis Globais (Scope Global)
//Hoisting -> SOMENTE O VAR REALIZA ESSE METODO(Pega uma variável dentro de um bloco e tranforma ela em variável global)
// console.log('Variável name existe aqui ?', name)

// {//Scopo (Bloco de código)
//     //Local
//     var name = 'Luan'
// }

// console.log('Variável name existe aqui ?', name)


//Variáveis Locais (Scope Local)
let name = "luan"

console.log('Meu nome chegou aqui ? ?', name)


{//Scopo (Bloco de código)
    //Local
    //Veja que no resultado do console a variável "name" agora tem o valor de "Jenifer", porque dentro do Scopo a Variável respeita o que foi atribuido a ela dentro do BLOCO DE CÓDIGO DO SCOPO LOCAL
    let name = "Jenifer"
    console.log('Meu nome chegou aqui ? ?', name)
}

console.log('Meu nome chegou aqui ? ?', name)