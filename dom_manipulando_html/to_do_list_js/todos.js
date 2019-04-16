var listElement = document.querySelector('#app ul'); // PEGANDO UL do todo.html
var inputElement = document.querySelector('#app input'); // pegando input do todo.html
var buttonElement = document.querySelector('#app button'); // pegando button do todo.html


// var todos = [ // pode-se criar um array fixo de Strings;
//     'Fazer café',
//     'Estudar Javascript',
//     'Acessar Comunidade da Rocketseat'
// ]


// pegando conteudo da storage local;
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];  // json.parse - transforma json em array de string;
 // (|| []) - ou vazio no final da variavel é uma condicao de se ele não conseguir uma coisa retorna outra;

 
/**
 * Funcao que Coloca essas Strings em varios LI dentro de uma UL especifica.
 */
function renderTodos() {
    listElement.innerHTML = ''; // tudo que tiver dentro da ul será removido.
    for (todo of todos) { // for de arraylist
        var todoElement = document.createElement('li'); // criando elemento li na variavel
        var todoText = document.createTextNode(todo); // atribuindo o nome do elemento li

        var linkElement = document.createElement('a'); // criando o elemento de link;
        linkElement.setAttribute('href', '#');

        /**
         * Trabalhando com variavel de posicao e criando onclick
         */
        var pos = todos.indexOf(todo); // retorna a posição do array no laco de repeticao
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); // Modificando atributo de onclick

        var linkText = document.createTextNode('Excluir'); // criando texto 'excluir' no elemento link

        linkElement.appendChild(linkText); // inserindo texto no elemento de link
        todoElement.appendChild(todoText);// inserindo variavel nome no elemento li
        todoElement.appendChild(linkElement); // inserindo link elemento de todo;
        listElement.appendChild(todoElement); // inserindo variavel pronta na lista dentro do html
    }
}
renderTodos();

function addTodo() {
    var todoText = inputElement.value; // pegando valor do imput
    todos.push(todoText); // Adiciona um elemento no final do Array
    inputElement.value = ''; // limpando campo de input
    renderTodos(); // renderizando a grid novamente com o novo valor.
    saveToStorage();
}

buttonElement.onclick = addTodo; // ao clicar no botao ele chama a funcao addtodo

function deleteTodo(pos) {
    todos.splice(pos, 1); // remove o item apartir da posição do array ([0],1) remove o 0;
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    // convertendo em JSON e gravando no storage local; 
    localStorage.setItem('list_todos', JSON.stringify(todos));
}