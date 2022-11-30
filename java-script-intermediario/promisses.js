// As funções no JS são executadas na sequência em que são chamadas. Não na sequência em que são definidas

/*
Ex: 
    function myFisrt() {
        myDiplayer("Hello")
    }

     function mySecond() {
        myDiplayer("Goodbye")
    }

    myFisrt() 
    mySecond() 

*/

/*
    Promises
        Objeto Promises representa a eventual conclusão (ou falha) de uma 
        operação ASSINCRONA e seu valor resultante.

        Estados de uma Promises:

        Pending: Estado INICIAL ou PENDENTE
        Fulfilled ou resolved: Operação CONCLUIDA com SUCESSO
        Rejected: OPERAÇÃO FALHOU

        Promise é uma função contrutora, e por isso, é um objeto que 
        permite modelar seu comportamento assincrono do JS, Ela instancia
        'Promessas', ou seja, tarefas que podem levar um tempo maior para
        terminar em relação a outras.

        Isto acontece em alguns casos como por exemplo:
        - Temos que receber dados de alguma API;
        - Uma API que precisa receber dados de outra API;
        - Uma API faz uma requisição a um bando de dados;

        Enquanto não temos as respostas para estas requisições, nosso
        software não precisa ter seu funcionamento travado. Nestes casos, 
        temos uma promessa de que os dados requisitados chegarão. 

        Then()
        As Promisses têm um método chamado .then(). Ele permite que se 
        realize alguma tarefa após a promisse ser resolvida será invocado
        quando a função for resolvida.

        Reject()
        Caso a Promisse não seja resolvida por algum motivo, será invocado o 
        método reject().

        Finally(
            Será invocado independente do resultado da Promisse.

        
        Fetch()
        É UM MÉTODO QUE RETORNA UMA PROMISSE.

        Ex:
            function getUser(userid) {
                const user = fetc(url da API)
                .then(response => response.json())
                .then(data => console.log(data))
            }

        Promisse.all()
        UTILIZADO QUANDO HÁ VÁRIAS PROMESSAS QUE DEVEM SER RESOLVIDAS
        
        const endpoints = [
            https://api.com/api/user/1
            https://api.com/api/user/2
            https://api.com/api/user/3
            https://api.com/api/user/4
        ]

        const promisse = endpoints.map(url => fetch(url).then(res => res.json()))

        Promisses.all(promisses)
        .then(body => console.log(body.name))
 */

function show() {

    setTimeout(() => {
        console.log('Oiii!')
    }, 5000);

    console.log('Até logo!')

}

//show()

const minhaPromisse = new Promise((resolve, reject) => { 
    let n = 11
    if(n > 10) {
        resolve()
    }else{
        reject()
    }
})

minhaPromisse
.then(result => console.log('Resolveu'))
.catch(err => console.log('Errou'))
.finally(()=> console.log('Finally'))


//Fetch()

const firstUser = (userId) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

firstUser(1)