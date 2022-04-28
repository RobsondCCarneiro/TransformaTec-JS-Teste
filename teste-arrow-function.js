let soma = somatorio(1,2)

// declaração de função convencional
function somatorio(n1,n2){
    return n1 + n2;
}
console.log(soma)

//declaração da função arrow function mais contraída o possível
let soma2 = (n1, n2) => n1 + n2;

console.log(soma2(1,2))