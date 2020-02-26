
const usuarios = [
    {nome: 'pedro', idade: 18, escola:'ifpi'},
    {nome: 'ana', idade: 22, escola:'ifpi'},
    {nome: 'lia', idade: 15, escola:'ibc'}
];

//Questão 1. letra A:
const idades = usuarios.map(function(user){
    return user.idade;
})

//Errow function
console.log("Letra A\n")
for (idade in idades){
    console.log("idade", idades[idade])
}

//Questão 1. Letra B:

const alunos = usuarios.filter(function(aluno){
     return aluno.escola == "ifpi";
})
console.log("Letra B\n")
console.log("escola", alunos.map(aluno=>aluno.nome))

//Questão 1 Letra C
const busca = usuarios.find(function(aluno){
    return aluno.escola == "ibc"
})
console.log("Letra C\n")
console.log("busca:", busca.nome)

//Questão 1 Letra D

let multip = usuarios.map(function(user){
    user.idade *= 2
    return user
})
multiplica = multip.filter(function(user){
    return user.idade <= 40
})
console.log("User", multiplica.map(user=>user.nome))


