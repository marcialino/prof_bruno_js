/*Função Parametrizada: você introduz valores na função. Você coloca os valores dentro do parentêse.  */

function nome(n1, n2){
    console.log(n1+n2)
    
}
nome(5,4) // precisa passar dois parâmetros para apresentar um resultado. Senão dá: NaN

//Você pode também definir valores padrões. Caso você não passe nenhum valor, o sistema assume que é o valor padrão. No exemplo abaixo o valor padrão é zero.

function valor (n3=0,n4=0){
    console.log(n3*n4)
}

valor(2,5)
