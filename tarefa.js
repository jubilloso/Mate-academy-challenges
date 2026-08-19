
function greeter (hora){
  if (hora < 12){
    console.log('Bom dia!');
}else{
    console.log(`Boa Tarde! são ${hora} horas`)
}
  return hora;
}
  console.log(greeter(15));


  function factorial (h){
    let fact = 1;
    for(let i = h; i >= 1; i--){
   fact *= i; 
  }
 return fact
}
  console.log (factorial(5));


function greetIfRetired  (age){
    if (age >=65){
        return('Have a nice day!')
    }
  }
  console.log(greetIfRetired(78))

  function printOddOrEven (n){
    if (n % 2 === 0){ return 'even '}
    else {return 'odd ' }
  }
  console.log(printOddOrEven(5));



  function checkWordLength(word) {
  if (word.length < 5 ) {
    return (`${word} is a short word`)
  }
  else {
    return (`${word} is a long word`)
  }
}
console.log(checkWordLength('José Está Fazendo Live'))


function canBuyBeer (age){
        if (age < 18) {
        return ('You cannot buy beer')
    }
    else {
        return ('You can buy beer')
    }
}
console.log(canBuyBeer(26))

function getTipsRating (amount){
 if (amount > 50){
    return ('excellent')
 }
 if (amount > 20){
    return ('great')
 }
 if (amount > 10){
    return ('good')
 }
if (amount > 0 ){
    return ('poor')
}
else {return ('terrible')
}
} 
console.log(getTipsRating(50))


function calculateDiscount (price){
    if (price > 100 ) {
        return (`Your price with discount is ${price - 20}!`)
    }
   else {
    return (price)
   }
}
console.log(calculateDiscount(150))



function sumUpTo (n){
   let amount = 0;
   for(let i = n; i >=1; i--){
   amount += i
}
    return amount
}
     console.log(sumUpTo(5))


function convertTemperature  (temp, scale){
   if (scale === 'c') {return (
    `The temperature in Fahrenheit is ${temp * 1.8 + 32}!`)
   }
  else if (scale === 'f') { return (
    `The temperature is already in Fahrenheit ${temp}!`)
  }
  else {return (
    'Invalide scale')
  }
}
console.log(convertTemperature('22','c'))


function getSum (numbers){
 let sum = 0;
 for ( const number of numbers){
   sum += number;
 }
 
 return sum;
}
console.log(getSum([14,26]))


function isString (value){
if (typeof value === 'string'){ 
  return ( 
    `The value ${value} is a text!`)
}
else {
  return (
    'The value is not a text')
}
}
console.log(isString('José Lucas'))
console.log(isString('Victóriass222'))


function isNumber (value) {
 if (typeof value === 'number'){
return (`The value ${value} is a number!`)
 }
else {
  return ('the value is not a number')
}
}
console.log(isNumber('ABCDEFG'));
console.log(isNumber(2331))



function isEven (number){
if (number % 2 === 0){
  return (`The number ${number} is even!`)
}
else {return (
  `The number ${number} is odd!`)
}
}
console.log(isEven(687))
console.log(isEven(10))
console.log(isEven(0))






function celsiusToFahrenheit (celsius){
{return (
  `The temperature is ${celsius* 1.8 + 32}°F!`)
}
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(-10));