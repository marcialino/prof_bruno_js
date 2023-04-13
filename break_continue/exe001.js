/* break = expressão que interrompe o loop e continua a execução do programa;
continue = as ações continuam dentrdo do loop, ele só cancela a operação corrente, pulando para a próxima iteração.
*/

var n = 0
var max = 1000

while(n < max){
    console.log('Márcia Lino - ' + n)
     if(n > 10){
     break
     }
    n++
}
console.log('Fim do Programa')