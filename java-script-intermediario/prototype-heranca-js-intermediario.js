//Prototypes

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const luiz = new Pessoa('Luiz', 28);
console.log(luiz.idade)


const notebook = { 
    // cor: "Preta",
    // ano: "2022",
    specs: function (name, value, cor, ano) {
        return `Este ${name} custa R$${value},00 cor ${cor} ano ${ano}`
    }
}

const dell = {
    marca: 'Dell'
}

const macbook = {
    marca: 'Apple'
}

Object.setPrototypeOf(dell, notebook)
Object.setPrototypeOf(macbook, notebook)

console.log(dell.specs('Dell',5000,'azul','2022'))
console.log(macbook.specs('Macbook',13000,'gray','2022'))