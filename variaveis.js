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

//Globais
//Hoisting -> SOMENTE O VAR REALIZA ESSE METODO(Pega uma variável dentro de um bloco e tranforma ela em variável global)
console.log('Variável name existe aqui ?', name)

{//Scopo (Bloco de código)
    //Local
    var name = 'Luan'
}

console.log('Variável name existe aqui ?', name)