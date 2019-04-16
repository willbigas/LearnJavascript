       /**
        * Intervalo de Tempo (Interval) , Aguardo de Tempo (TimeOut);
        */
        
        function exibeAlgo(){
            console.log('hello World');
        }

        // Importante Na Hora de chamar uma funcao como parametro Não usar ();
        // 
        setInterval(exibeAlgo, 1000); // executa varias vezes num intervalo de 1s

        setTimeout(exibeAlgo, 5000); // Executa 1 Vez , depois de 5 segundos.