function temHabilidade(skills, find) {
    if (skills.indexOf(find) >=0) { // index of retorna -1 se não achar.
        return true;
    } else {
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
var result = temHabilidade(skills, "Javascript");

if (result == true) {
    console.log('Tem habilidade');
} else {
    console.log('Não tem habilidade');
}