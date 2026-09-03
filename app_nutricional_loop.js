function calculateCalories (alimento, gramas){
    let caloriePerG = 0;
    if (alimento === 'carne'){
        caloriePerG = 2.3
    }
    else if (alimento === 'feijão' ){
        caloriePerG = 0.76
    }
    else if (alimento === 'ovo'){
        caloriePerG = 1.46
    }
    else if (alimento === 'macarrão'){
        caloriePerG =  1.58
    }
    const calories = caloriePerG * gramas;
     return calories
}
    let dish = [{nome: 'carne', gramas: 150}, {nome: 'feijão', gramas: 110},   {nome: 'ovo', gramas: 20},   {nome: 'macarrão', gramas: 75},]                                                             
    let totalCaloriesLunch = 0;
    for (let i = 0; i < dish.length; i++){
    totalCaloriesLunch += calculateCalories (dish[i].nome, dish[i].gramas);
    
}  
console.log(`The total number of calories in your lunch is: ${totalCaloriesLunch} kcal`);
