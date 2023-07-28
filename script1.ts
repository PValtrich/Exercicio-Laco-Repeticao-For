const entrada1 = require ("readline-sync");

let numero : number = parseInt(entrada1.question("Digite um numero inteiro positivo: "));

if(numero % 2 == 0){
    for(let i = 0; numero >= i; numero = numero - 2){
        console.log(numero);
        
    }
    
}
else{
    console.log("impar");
    
}