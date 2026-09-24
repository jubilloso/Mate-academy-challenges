#include <stdio.h>
int main (){
int cont,quantidadeDeAlunos;
float nota1, nota2,media, nota3;
 
 printf("Digite a quantidade de alunos:");
 scanf("%d",&quantidadeDeAlunos);
   for ( cont = 1; cont <= quantidadeDeAlunos; cont++)  {
    printf("\nDigite a primeira nota :"); 
     scanf("%f",&nota1);
        printf("\nDigite a segunda nota:");
         scanf("%f",&nota2);
            printf("\nDigite a terceira nota:");
             scanf("%f",&nota3);
        media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7){
    printf("\nAluno foi aprovado com a media: %.1f",media);
  }
  else printf ("\nO aluno foi reprovado com a media: %.1f",media);
  }
 return 0;
  }

  