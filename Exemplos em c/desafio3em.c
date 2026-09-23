#include <stdio.h>
int main (){

float salario, maiorSalario, somaSalarial, mediaSalarial;
int cont;
    maiorSalario = 0;
    somaSalarial = 0;

  for (cont = 1; cont <= 10; cont++){
     printf("\nDigite seu salário: ");
     scanf("%f",&salario);
       somaSalarial = somaSalarial + salario;
         if (salario > maiorSalario){
            maiorSalario = salario;
         }

} 
             mediaSalarial= somaSalarial /10 /*Aqui depende da quantidade de salários que serão contados*/; 
               printf("O maior salário da empresa é = %.2f", maiorSalario); 
                 printf("\nA média salarial da empresa é = %.2f",mediaSalarial);
    return 0;


}