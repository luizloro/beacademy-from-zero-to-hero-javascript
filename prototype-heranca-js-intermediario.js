//Prototypes

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const luiz = new Pessoa('Luiz', 28);
console.log(luiz.idade)


const notebook = {
    cor: "Preta",
    ano: "2022",
    especs: function(value) {
        return `Este notbook custa R$${value},00 cor ${this.cor} ano ${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell,notebook)

console.log(dell.especs(5000))