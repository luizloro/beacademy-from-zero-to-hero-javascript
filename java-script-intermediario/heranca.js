// Herança

class Candidates {
    constructor(firtsName, surName, cpf) {
        this.firtsName = firtsName
        this.surName = surName
        this.cpf = cpf
    }
}

class Macs extends Candidates {
    constructor(firstName, surName, cpf, reservista) {
        super(firstName, surName, cpf)
        this.reservista = reservista
    }
}

const candidate1 = new Macs('Luiz', 'Eduardo', 123456789, true)
const candidate2 = new Macs('Almeida', 'Galvão', 567899101)
console.log(candidate1)