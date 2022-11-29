// Classes
const Foo = function(x) {
    this.x = x
}

const foo = new Foo('x')

//console.log(foo)

class book {
    constructor(title, year, author) {
        this.title = title
        this.year = year
        this.author = author

    }
}

const domCasmurro = new book('Dom Casmurro', 1999, 'Machado de Assis')
const harryPotter = new book('Harry Potter', 1997, 'J. K. Rowling')

let listBook = []
listBook.push(domCasmurro, harryPotter)
console.log(listBook)


class copaDoMundo {
    constructor(country, year) {
        this.country = country
        this.year = year
    }

    showChampion(team) {
        return `A copa do ${this.country} fou disputada no ano de ${this.year} e o campeão foi ${team}`
    }
}

const copa86 = new copaDoMundo('Mexico', 1986)
const copa70 = new copaDoMundo('Mexico', 1970)
const champion86 = copa86.showChampion('Argentina')
const champion70 = copa70.showChampion('Brasil')

console.log(champion86)
console.log(champion70)