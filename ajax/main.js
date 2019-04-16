// Iniciando requisição Ajax; (pega acesso do servidor);
var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.github.com/users/willbigas');
xhr.send(null);

// 4 - Recebi O Sucesso
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4); {
        console.log(JSON.parse(xhr.responseText));
    }
}