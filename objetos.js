const human = {
    name: "Luiz Eduardo",
    age: 28,
    weight: 64,
    isAthlete: false,
    walk: function() {
        console.log('Eu ando bastante')
    }
}//Objeto

//Concatenar
console.log("O Humano " + human.name + " tem a idade " + human.age) 
//Interpolação
console.log(`O humano ${human.name} tem a idade ${human.age}`) 
