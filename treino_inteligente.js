


function treinoInteligente (exercicio,repeticoes, series, carga){
let pesoCorporal = 67;
let volumeTotal = series * repeticoes * carga;
let forcaRelativa = carga / pesoCorporal;

return (`Exercício: ${exercicio} | volume: ${volumeTotal} | Força: ${forcaRelativa.toFixed(2)}x seu peso!`)




}
    let myLegsTrain = [
    {exercicio : 'agachamento', repeticoes : 6, series : 2, carga : 130, },
    
    
    {exercicio : 'leg press', repeticoes : 7, series : 2, carga : 183, }, 
    
    {exercicio : 'cadeira extensora unilateral', repeticoes : 6, series : 2, carga : 130, },
    
    {exercicio : 'cadeira flexora ', repeticoes : 6, series : 2, carga : 130, },
    
    
    {exercicio : 'Panturriha maquina', repeticoes : 6, series : 2, carga : 45, }
    ]
    

    let myPushTrain = [
    {exercicio : 'Supino inclinado smith', repeticoes : 5, series : 2, carga : 70, },
    
    {exercicio : 'supino reto smith', repeticoes : 6, series : 2, carga : 35, }, 
    
    {exercicio : 'cruxifixo maquina', repeticoes : 6, series : 2, carga : 130, },
    
    {exercicio : 'desenvolvimento smith', repeticoes : 6, series : 2, carga : 50, },
    
    {exercicio : 'elevacao lat polia', repeticoes : 7, series : 2, carga : 12, }
    ]
    

    let myPullTrain = [
    
        {exercicio : 'terra', repeticoes : 3, series : 1, carga : 188, },
    
        {exercicio : 'puxador frente triangulo', repeticoes : 8, series : 2, carga : 88, }, 
   
        {exercicio : 'remada upper back apoio de peito', repeticoes : 7, series : 2, carga : 91, },
   
        {exercicio : 'remada baixa unilateral', repeticoes : 6, series : 2, carga : 40, },
   
        {exercicio : 'pulldown', repeticoes : 7, series : 2, carga : 57.4, }
    ]
  


    