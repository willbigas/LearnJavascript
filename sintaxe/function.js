        /**
         * Criando Metodo em Javascript (Function);
         */
        
        // Function não precisa de retorno diferentemente do Java.

        function soma(numero1 , numero2) {
        var resultado = numero1 + numero2; 
        // var resultado só e vista dentro do proprio escopo
         return resultado;
        }
        // necessário redeclarar a var resultado pois ela não está global.
      var resultado = soma (15,10);
      console.log(resultado); // imprime no console;