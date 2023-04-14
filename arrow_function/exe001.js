/*Arrow Function ou Funções Lâmbdas - Função Anônima. Segue o mesmo modelo das outras funções. Só que no lugar da palavar function usa-se uma seta => por isso o nome de arrow) */ 


//Function Arrow com dois valores
const soma = (v1,v2) =>{return v1+v2} //pega-se os valores de v1 e v2 e dá o retorno da soma deles.

console.log(soma(10,5))

//Functio Arrow com um valor, não precisa dos parênteses.
 /*Se for uma operação simples não precisa do return e da chaves. Para operação com mais de uma linha, precisa colocar as chaves e o return*/

const soma1 = n => {return n}

console.log(soma1(4))

const soma2 = (v1,v2) => {
    var res = v1 + v2
    return res
}
console.log(soma2(10,5))