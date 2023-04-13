/*Função Parametrizada: você introduz valores na função. Você coloca os valores dentro do parentêse.  */

function nome(n1, n2){
    console.log(n1+n2)
    
}
nome(5,4) // precisa passar dois parâmetros para apresentar um resultado. Senão dá: NaN

//Você pode também definir valores padrões. Caso você não passe nenhum valor, o sistema assume que é o valor padrão. No exemplo abaixo o valor padrão é zero.

function valor (n3=0,n4=0){
    console.log(n3*n4)       /*neste caso está realizando a operação dentro da função. Mas, pode também fazer usando o return*/
}
    valor(2,5)

//Com função return

function valores(n5=0, n6=0){
    var res = n5/n6
    return res
}
 var num = valores(6,2)
console.log(num)
