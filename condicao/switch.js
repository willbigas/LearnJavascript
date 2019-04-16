        /**
         * Estrutura de Condicao - Switch
         */
        
        function retornaSexo(sexo) {
            switch(sexo){
                case 'M':
                return 'Maculino';
                case 'F':
                return 'Feminino';
                default:
                return 'Outro';
            }

        }
        var resultado = retornaSexo('F');
        console.log(resultado); // imprime no console.