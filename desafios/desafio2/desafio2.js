x = 5 , y = 50;

function pares(x , y) {
    while (x <= y) {
        if (x % 2 == 0) {
            console.log('Numero par ' + x );
        } else {
            console.log('Numero impar' + x);
        }
        x++;
    }
}
pares(x,y);