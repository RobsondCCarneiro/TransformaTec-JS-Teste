const numero = 8;

if(numero > 10 && numero <= 20){
    console.log("O número é maior que 10 e menor ou igual que 20")
}
else if(numero > 20 && numero < 100){
    console.log("O número é maior que 20 e menor que 100")
}
else if(numero == 10){
    console.log("O número é igual a 10")
}
else{
    console.log("O número está fora do intervalo de 10 a 100")
}