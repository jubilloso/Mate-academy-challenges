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
console.log(dobroTriploMetadetarefa5(2.5))
console.log(dobroTriploMetadetarefa5(-4))
