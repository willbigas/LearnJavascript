        /**
         * Estrutura de Condicao - IF
         * 
         */
        
        // if (1 == '1') // return true; (Verifica somente os valores das variaveis)

        // if (1 === '1') // return false (Verifica Valores e Tipos);

        /**
         * Faz Verificação de Sexo por String
         * @param {} sexo 
         */
        function retornaSexo(sexo) {
            // M , F
            // MASCULINO , FEMININO
            if (sexo === 'M') {
                return 'Masculino';
            } else if (sexo === 'F') {
                return 'Feminino';
            }
            else {
                return 'Outro';
            }
        }
        var resultado = retornaSexo('ursauhruashr');
        console.log(resultado); // imprime no console