let carrosObj = [{
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
},
{
    marca: 'chevrolet',
    modelo: 'Onix',
    cor: 'prata',
},
{
    marca: 'fiat',
    modelo: 'marea bomba',
    cor: 'prata',
}];

//obtem todos os objetos dentro do array carrosObj
for (let carro of carrosObj) {

    //obtem uma propriedade especifica
    console.log("\n Imprimindo a cor do objeto: "+carro.cor+"\n");

    //obtem todas as propriedades do objeto
    console.log("Imprimindo todas as propriedades do carro\n")
    for (propriedade in carro) {
        console.log(propriedade +":"+carro[propriedade]);
    }
}
