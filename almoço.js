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
      


     return (`${gramas} de ${alimento} da um total de ${caloriaPorGrama * gramas} calorias!`)

}
console.log(calcularCalorias('carne',100));