function calcularCalorias (alimento, gramas){
let caloriaPorGrama = 0;

    if (alimento==='carne'){
        caloriaPorGrama = 2.5
    }
    else if (alimento === 'arroz'){
           caloriaPorGrama = 1.3
    }
     else if ( alimento === 'batata'){
        caloriaPorGrama = 0.52
     }
     const formaDeCalcular = caloriaPorGrama * gramas;  
     return formaDeCalcular;
      //antigo estava assim: return (`${gramas} de ${alimento} da um total de ${caloriaPorGrama * gramas} calorias!`)
    //return caloriaPorGrama * gramas
 
 

}

let prato = [ { nome: 'carne', gramas: 100 }, { nome: 'arroz', gramas: 0 },{nome: 'batata', gramas: 0}];
let totalCaloriasAlmoco =0;
for(const alimento of prato ) 
totalCaloriasAlmoco += calcularCalorias(alimento.nome, alimento.gramas);


console.log(`O total do prato combinado deu: ${totalCaloriasAlmoco} calorias! 🥩🍚`);




//totalCaloriasAlmoco += calcularCalorias('carne',150);






//Daqui pra cima consegui fazer para calcular alimento por alimento, agora que scriar uma variável tipo 
// "calorias totais" e aponte o total das calorias de alimentos unidos em um almoço
