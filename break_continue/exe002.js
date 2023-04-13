var n = 0
var max = 1000
var pares = 0

for(var i = n; i < max; i++){
    if(i%2 != 0){ /* se o número atender esta condição, significa que ele é impar, então a execução continua, não soma um no pares++. Quando não atender, siginifica que o npumero é par, então, a execução para a próxima iteração e soma um no pares++*/
        continue
    }
   
    pares++
}
console.log('Quantidade de pares - ' + pares)
console.log('Fim do Programa')