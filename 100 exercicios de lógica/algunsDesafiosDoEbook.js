let nome = 'Marina';
function boasVindasTarefa1 (){
return `Olá ${nome}! Seu ambiente está funcionando.`;

}
console.log(boasVindasTarefa1());

// Tarefa 1 teste seu ambiente

function somaTarefa2 (a,b) {
let total = a + b ;
return (`A soma de ${a} + ${b} é: ${total}`);

}
console.log(somaTarefa2(4,9));

 
// Tarefa 2 soma de dois números

function mediaTarefa3 (nota1, nota2){
let media = (nota1 + nota2) / 2;
return (
    `A média das notas: (${nota1}) e : (${nota2}) é ${media}`
)
}
console.log(mediaTarefa3(5.5,7.5));


// Tarefa 3 média de duas notas

function AntecessorSucessorTarefa4 (numero){

let antecessor = numero - 1;
let sucessor = numero + 1;
return (`O antecessor de ${numero} é: (${antecessor}) E o sucessor de ${numero} é: (${sucessor}) `)

}

console.log(AntecessorSucessorTarefa4(20));

// Tarefa 3 Antecessor e Sucessor

function dobroTriploMetadetarefa5 (numero){
let dobro = numero * 2;
let triplo = numero * 3;
let metade = numero / 2; 
return (`O dobro de ${numero} é: ${dobro}. O triplo de ${numero} é: ${triplo}. a metade de ${numero} é: ${metade}.`)
}
console.log(dobroTriploMetadetarefa5(8))


// Tarefa 4 Dobro, triplo e metade

function convertMedidas (metros, tipo){
  
if  (tipo === 'Centímetros' || tipo === 'centimetros' ) { 
 return (`O valor de ${metros} (metros) em centímetros é ${metros * 100 }`);
}

if  (tipo === 'Milímetros' ||  tipo === 'milimetros' ) { 
    return (`O valor de ${metros} (metros) em milímetros é ${metros * 1000} `);
  }
if (tipo == 'Todos' || tipo == 'todos') {
    return (`O valor de (${metros} Metros) em Centímetros é: (${ metros * 100}). E o valor de (${metros} Metros) em Milímetos é: (${metros * 1000})`)
}

 return (`Defina o valor entre Centímetros, Milímetros ou Todos`)
}


console.log(convertMedidas(12.3,'todos'));

// Tarefa 5 Converter metros

function AreaPerimetroRetangulo (largura,altura){
const area = largura * altura;
const perimetro = 2 * (largura + altura)

 if ( typeof largura !== 'number' && typeof altura !== 'number')  {  //primeiro vê os erros
   return (`Defina a largura e a altura do seu retângulo com números válidos!`)
 }
if ( typeof largura === 'number' && typeof altura !== 'number')  {
   return (`Você definiu largura como ${largura} mas falta definir a Altura! (ou digitar um número)!`)
}
if ( typeof largura !== 'number' && typeof altura == 'number')  {
   return (`Você definiu altura como ${altura} mas falta definir a Largura! (ou digitar um número)!`)
}
if (typeof largura === 'number' && typeof altura === 'number') {
    return (`A área do seu retângulo é: ${area}. E o Perímetro do seu retângulo é: ${perimetro}`)
}

}
console.log(AreaPerimetroRetangulo(4,4))



