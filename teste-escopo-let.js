let numero = 10;

console.log(numero);

console.log(typeof(numero));


/* Quando eu coloco let duas vezes dá erro, 
enquanto se colocasse var o programa deixaria repetir */
/* let numero = "dez"

console.log(numero);

console.log(typeof(numero)); */

function imprimedez(){
    /*variável declarada dentro do escopo de uma função - 
    esta variável existe apenas dentro deste bloco */
    let numero = "dez"

    console.log(numero);

    //imprime o tipo da variável numero
    console.log(typeof(numero));
}

imprimedez()
imprimedez()

