//Variável do tipo objeto
var pessoa = {
    nome:"Robson",
    idade:32,
    estudante:true
}

//switch-case que escolhe entre duas possibilidade de opções
switch (pessoa.estudante) {
    case true:
        console.log("Estudante")
        break;
    case false:
        console.log("Graduado")
        break;
    default:
        console.log("Aluno não registrado")
        break;
}