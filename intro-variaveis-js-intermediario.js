// Variaveis
// var - 1995 a 2015
// let e const - 2015 ES6 (ECAMAScript 6)
// Sempre usar const
/*
    const x = 5;
    cont y = 6;
    let z = x + y;
*/ 

// Scope

{
    let x = 2;
    console.log(x)
}

{
    var y = 2; 
}

console.log(y)

//Reassing a value

let w = 10
w= 5
console.log(w)


//Templete Strings
/*
    Também conhecido como 'Template Literals'. É uma forma facilitada de interpolar
    variáveis ou expressões em um texto.
    Utiliza (`CRASE`) em vez de ("Parenteses")
*/

let firstName = "Luiz"
let lastName = "Eduardo"

let text = `Welcome ${firstName} ${lastName}`
console.log(text)

let price = 10
let fees = 0.50
let total = `O total do produto é: $${(price + fees)}`
console.log(total)
