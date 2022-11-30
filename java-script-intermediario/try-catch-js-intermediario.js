/* Try / Catch

    Try - Determina um bloco de código que será executado na PROMISE;

    Catch - Determina um bloco de código no qual os erros serão tratados;

    Finaly - Deter,oma um bloco de código que será executado qualquer seja o reultado da PROMISSE; (Raramente utilizado)

    Throw - Define um erro customizado;

    Níveis de TRY/CATCH

        Utilizando o objeto Error

        o contrutor Erro() cria um objeto de erro.

        Podemos utilizar Erro() ou new Erro()

        A declaração throw lança uma execão previamente definida. A execução dessa função
        será interrmpida e as intruções após o trhow não serão executadas.

        Também podemos customizar o ERRO instanciando uma classe a ser chamada toda 
        vez que um ERRO acontecer na aplicação

*/

class customErro {
    constructor(menssage) {
        this.menssage = menssage
    }
}

function function1() {
    try {
        console.log('function1 no try')
    } catch (erro) {
        throw new customErro('Erro na function1')
    }
}

function1()