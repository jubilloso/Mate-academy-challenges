



const formulario = document.querySelector('#meuFormulario');

const campoAno = document.querySelector('#ano');

const celulaResultado = document.querySelector('#celula-resultado')





function getCentury (year){
  let anoDoTexto = year.toString(); // converte para string
  
   if (anoDoTexto.length <= 2) { // aqui se o ano tiver dois ou menos caracteres, retonará século 1
    return 1
   }
  else if (
    anoDoTexto.length === 3 && anoDoTexto[1] === "0"  && anoDoTexto[2] === "0" )  {
      return parseInt(anoDoTexto.slice(0, 1)); // converte string para number para pode fazer as operações matemáticas
    }
  else if (
    anoDoTexto.length === 3 && anoDoTexto[1] !== "0"  && anoDoTexto[2] !== "0" )  {
      return parseInt(anoDoTexto.slice(0, 1)) +1;
    }
   
   
   
   else if ( 
    anoDoTexto.length === 4  && anoDoTexto[2] === "0" && anoDoTexto[3] === "0" ) {
    return parseInt(anoDoTexto.slice(0, 2)); // o .slice vai "retornar a partir do 0 e vai excluir tudo o que estiver  partir  do 3"
 }
else if  (
      anoDoTexto.length === 4  && anoDoTexto[2] !== "0" || anoDoTexto[3] !== "0" ) 
  {
    return parseInt(anoDoTexto.slice(0, 2)) + 1;
  } 
  
  else if ( 
    anoDoTexto.length === 5  && anoDoTexto[3] === "0" && anoDoTexto[4] === "0" ) {
    return parseInt(anoDoTexto.slice(0, 3)); // o .slice vai "retornar a partir do 0 e vai excluir tudo o que estiver a partir  do 3"
 }
else if  (
      anoDoTexto.length === 5  && anoDoTexto[3] !== "0" || anoDoTexto[4] !== "0" ) 
  {
    return parseInt(anoDoTexto.slice(0, 3)) + 1;
  }  

  }

function gerenciarConversao (evento){
  evento.preventDefault();

  const anoDigitado = campoAno.value;

if (anoDigitado === "") {
  celulaResultado.textContent = "Digite um ano";
  return;
}
    const seculoCalculado = getCentury(anoDigitado);

    celulaResultado.textContent = `Século ${seculoCalculado} `

}

formulario.addEventListener('submit', gerenciarConversao);