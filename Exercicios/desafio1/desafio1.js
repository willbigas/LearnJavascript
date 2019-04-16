
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
var impressao = '';
function retornaEndereco(endereco) {
    impressao = ('O usuario mora em ' + endereco.cidade
        + ' / ' + endereco.uf + ' no bairro ' + endereco.bairro + ', na rua "'
        + endereco.rua + '" com nº ' + endereco.numero);
    return impressao;
};
console.log(retornaEndereco(endereco));