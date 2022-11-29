function hello(name) {
    console.log(name)
}

//hello('Caio')

function helloUser(n) {
    n('Luiz Eduardo')
}

//helloUser(hello)

const callback = e => alert('Foi clicado')

window.addEventListener('click', callback)