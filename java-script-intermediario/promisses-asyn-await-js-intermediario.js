// Async e Await

const firstUser = async (userId) => {
    let response = fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJson = await (await response).json()
    let title = await resultJson.title
    console.log(resultJson)
}

firstUser(1)

async function user() {
    try {
        let response = fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        let data = await (await response).json()
        console.log(data)
    } catch (erro) {
        console.log('erro ----->', erro)
        throw new Error('Erro no fetch')
    } finally {
        console.log('Finalizou')
    }
}

user()