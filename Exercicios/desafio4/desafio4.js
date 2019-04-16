function experiencia(anos) {
    if (anos <=1) {
        return 'Iniciante';
    } else if (anos <=3) {
        return 'Intermediario';
    } else if ( anos <6) {
        return 'Avançado';
    } else if (anos >=7) {
        return 'Jedi Master';
    }
}

var anosEstudo = 1;
var result = experiencia(anosEstudo);
console.log(result);