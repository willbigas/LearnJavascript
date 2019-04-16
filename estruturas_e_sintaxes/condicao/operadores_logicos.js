        /**
         * Operadores Logicos AND,OR,NOT //
         */
        
        var sexo = 'F' , idade = 23;
        
        if (sexo === 'M' && idade >= 18) { // AND
            console.log('OK');
        }

        if (sexo === 'M' || idade >= 18) { // OR
            console.log('OK');
        }
        if (sexo !== 'M') { // OPERADOR INVERSO - NEGACAO
            console.log('OK');
        } else {
            console.log('Nada ok');
        }
        // ARMAZENANDO CONDICAO DENTRO VARIAVEL (MUITO INTERESSANTE);
        var masculino = sexo === 'm'; 
         // usar parenteses se for + de uma condicao;
        var masculino = (sexo === 'm' && idade <= 23);   

