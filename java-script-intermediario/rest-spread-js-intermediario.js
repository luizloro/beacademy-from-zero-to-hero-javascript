/*
    Rest/Spreas

    REST parameters - Permite trabalhar com uma quantidade indefinida de parâmetros
    em uma função ou de elementos em um array.

    Em uma função, o rest permite capturar os argumentos:

        Ex:
            function getSum(...args) {
                let total = 0
                for(const arg of args) {
                    total += arg
                }
                return total
            }

    SPREAD OPERATOR - Permite expandir uma expressão recebendo múltiplos argumentos
    ou elementos. Podemos utilizar para concatenar / mergear arrays

        Ex.
            const arr = [1,2,3];
            const arr2 = [...arr, 4];
            const array1 = [1,2,3];
            const array2 = [4,5,6];
            const mergArrays = [... array1, ...array2];
*/

/*
    DESTRUCTURING - A desestruturação nos permite extrair dados de arrays e objetos
    e defini-los em novas varáveis

        Ex.
            const carro = {
                marca: 'Fiat',
                ano: '2008',
                portas: '4'
            }

            const {marca, ano} = carro

            Destructuring arrays
                
                Ex.
                    const frutas = ["Banana", "Uva", "Morango"];

                    const [primeira, segunda,terceira] = frutas
            
*/

// Rest parameters 

function getSum(...args) {
    let total = 0

    for (const arg of args) {
        total += arg
    }
    return total
}

console.log(getSum(2, 5, 7, 9, 8))

// Spread operator

const arr = [1, 2, 3]
const arr2 = [...arr, 4, 5, 6]
console.log(arr2)

// Merge Arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergArray = [...array1, ...array2]
console.log(mergArray)

//Destructuring

const carro = {
    marca: 'Fiat',
    ano: '2008',
    portas: '4'
}

const { marca, ano, portas } = carro
console.log(`Marca do veiculo ${marca}, ano de fabricação ${ano}, quantidade de portas ${portas}`)


const cliente = {
    nome: 'Luiz',
    compras: {
        digitais: {
            livros: ['Dom Casmurro', 'O cortiço'],
            filmes: ['Senhor dos Anéis', 'Matrix']
        },
        fisicas:{
            cadernos: ['Caderno']
        }
    }
    
}

console.log(cliente.compras.digitais.livros)
console.log(cliente.compras.digitais.filmes)

//Mesmo resultado utilizando Destructuring
const {livros, filmes} = cliente.compras.digitais
console.log(livros)
console.log(filmes)


//Destructuring ARRAYS

const frutas = ['Banana', 'Uva', 'Morango']

const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]

// Mesmo resultado utilizando Destructuring
const [primeira, segunda, terceira] = frutas   
console.log(primeira)