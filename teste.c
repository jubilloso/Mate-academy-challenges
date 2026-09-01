/*#include <stdio.h>

int main (void)
{
	float nota;
	printf ("Digite a nota: ");
	scanf("%f", &nota);
	printf("%0f\n",nota);
	if (nota >= 5)
		printf("Parabéns você foi aprovado\n");
	if (nota < 5)
		printf("Não deu desta vez, mas não desista!");
	return 0;
}*/

#include <stdio.h>
int main (){
int repeticoes;
int carga;
char postura;
char opcao;
float pesoCorporal;

printf("\nBem vindo! Responda com S ou N \n");

printf ("Voce quer testar Sensor Inteligente do Powerlifter? \n");
scanf("%c", &opcao);
    if (opcao == 'S' || opcao == 's'){
       
    printf("\nVamos ver se voce pode aumentar a carga:\n");
    
    printf("\nQual o seu peso corporal?");
    scanf("%f", &pesoCorporal);

    printf("Qual a sua carga: \n");
    scanf("%i", &carga);
    
    printf("Quantas repeticões você consegue com essa carga?\n");
    scanf("%i", &repeticoes);
    
    printf("A postura estava correta? S/N: \n");
    
    scanf(" %c", &postura);
  }
    
  if (opcao == 'N' || opcao == 'n' ){ 
      opcao = 0;
    printf ("\nOk, não vamos continuar\n");
  
      return 0;
  }
if ((repeticoes > 7) && (postura == 's'|| postura == 'S')){
printf("\n Parabéns monstro, voce pode subir essa carga! O céu é o limite");
printf("Você está levantando %.2f vezes seu peso corporal!\n", (float) carga / pesoCorporal);
}
else{
  printf("Tente dominar mais essa carga antes de progredir");
}

return 0; 
}

\\ ideias : criar um ranking de força: intermediário, avancado... e calcular um RM 