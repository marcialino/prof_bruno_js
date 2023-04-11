/*spread = quebrar. O operador vai quebrar um conjunto de elemento e devolver elemento por elemento.
Usa-se o três pontinhos ... para copiar os elementos de n1 para n2 usa:
let n3 = [...n1]*/


let n1 = [2, 4, 5, 6, 10]
let n2 = [0, 1, 8, 9, 10, 11, 12]
let n3 = [...n1] 
let n4 = [...n1, ...n2]//copiou os elementos de n1 e n2 para n4

// const = let 
/*Neste exemplo o jogador terá o nome de Maria e as características de Márcia e Maria juntas.*/ 
const jogador1={nome: "Márcia", energia:100, vidas:3, magia:150}
const jogador2={nome: "Maria", altura: 1.70, cabelo: "preto"}
const jogador3={...jogador1,...jogador2}


const soma = (v1,v2,v3) => {
    return v1 + v2 + v3
}
console.log(soma(2,4,8))

// Usando o spread. Mesmo a array tendo mais de 3 elementos, o código vai somar apenas os três primeiros

const soma1 = (v1,v2,v3) => {
    return v1 + v2 + v3
}
let valores = [1,2,3,4,5,6,7]
console.log(soma1(...valores))

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("n4: " + n4)
console.log(jogador3)