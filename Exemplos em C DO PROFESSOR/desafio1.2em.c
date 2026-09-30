#include <stdio.h>
int main (){
int nota1, nota2, nota3,quantidadeAlunos, media, cont;
   printf("Digite a quantidade de alunos: ");
    scanf("%d",&quantidadeAlunos);
for (cont = 1; cont <= quantidadeAlunos; cont++){
        
        printf("Digite a %dº nota:\n",cont);
         scanf("%d",&nota1);
          Printf("\nDigite a %dº nota:\n",cont);
           scanf("%d",&nota2);
            printf("Digite a %dº nota:\n",cont);
             scanf("%d",&nota3);
            
             if (media>=7){
           printf("APROVADO com média %.2f \n\n",media);
          
           else 
            printf("REPROVADO com média %.2f \n\n",media);
          }
          return 0;
}




}