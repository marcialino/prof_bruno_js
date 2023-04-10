let n1 = 13
let n2 = 14

let res = n1 + n2
let res1 = n1 & n2 //Números binário: para retornar bit 1, tem que ter a equivalência de 1 e 1. 
let res2 = n1 | n2 // números binário: onde tiver 0 e 1, retorna 1
let res3 = n1 ^ n2 // or exclusivo. Só retorna 1 se houver equivalência de 0 com  1
let res4 = n1 << 1 // << significa que está deslocando o n1 um bit para a esquerda. Quando você faz esse descolamento você dobra o valor do número. Substitui a operação: n1*2
 let res5 = n2 >> 1// deslocando uma cas para a direita, você divide o número pela metade. Pode substituir a operação: n2/2

console.log(res) // resposta: 27
console.log (res1) // resposta: 12
console.log(res2) // resposta: 15
console.log(res3) // resposta: 3
console.log(res4) //resposta: 26
console.log(res5) // resposta: 7