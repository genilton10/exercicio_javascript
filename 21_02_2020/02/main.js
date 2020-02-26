

// Questão 2. Letra A

const numeros = [1, 2, 3, 4, 5];

const numeros1 = numeros.map(item =>item + 10);

console.log("Questão 2: letra A")

console.log(numeros1.map(item=>item))

// Questão 2. Letra B

const usuario ={nome:"Ana", idade:"18"}

const idade = usuario => usuario.idade;

console.log("Questão 2: letra B")
console.log(idade(usuario))


// Questão 2. Letra c

const nome = "Bia";
const idad = 20;

const mostra = (nome = "Ana", idad = 18) =>({nome, idad});
console.log("Questão 2: letra C")
console.log(mostra(nome, idad))
console.log(mostra(nome))






