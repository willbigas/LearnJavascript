/**
 * Variaveis e Tipos de Variaveis (Primitivos,Arrays,Objects);
 */

// criando variaveis normais.
var nome = 'William'; // String
var idade = 21; // Integer
var peso = 90.0; // Double
var humano = true; // Boolean

var alunos = ['William', 'Gabriel ', 'felipe']; // Array de Alunos

var aluno = { // Criando Objeto Aluno com Atributos
    nome: 'Diego', // Atributo [String];
    idade: 23, // Atributo[Integer];
    peso: 80.5, // Atributo[Double]
    humano: true // Atributo [Boolean]
};

console.log(alunos); // Imprime o Array de Alunos completo
console.log(alunos[0]); // imprime a posicao 0 do Array de Strings Alunos
console.log(aluno); // imprime objeto aluno com todos seus atributos
console.log(aluno.idade); // imprime somente o atributo idade do objeto aluno