/*
var n1 = 10;
var n2 = 10;
var n3 = 10;
var n4 = 10;
var media = 7;
var Total;

//Total = n1 + n2;
//Total = n1 - n2;
//Total = n1 * n2;
//Total = n1 / n2;
//Total = n2 % n1;
//Total = n2 ** n1;
Total = (n1 + n2 + n3 + n4) / media;
if(Total >= 7){
    console.log("Aprovado, média: " + Total);
}else if(Total >= 5 && Total < 7) {
    console.log("Recuperação, média: " + Total);
}else{
    console.log("Reprovado, média: " + Total);
}
//////
for(let numero = 1; numero <= 10; numero++){
    console.log(numero);
}*/

const quantidadedealunos = 14;
var total = 0;

for(let alunos = 0; alunos <= quantidadedealunos; alunos++){
    total = alunos % 2;
    if(alunos == 0){
        console.log("É 0");
    }else if(total == 0){
        console.log("É par, numero: " + alunos);
    }else if(total =! 0){
        console.log("É impar, numero: " + alunos);
    }
}