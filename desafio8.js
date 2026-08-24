'use strict';

function testStrict() {
  // 1. Tente criar uma variável chamada "carro" sem colocar const ou let na frente
 carro = 'Civic 2000'; 
  
  return carro;
}

// 🧪 EXECUÇÃO (Para rodar no seu terminal):
try {
  console.log(testStrict());
} catch (error) {
  console.log('🚨 MODO ESTRITO ATIVO: O código quebrou com sucesso!');
}
