/*: 
for: éLoops usado quando você tem uma noção da quantidade de vezes que precisa iterar o nloco de comando
    for(inicializacao; condicao; contador ou controle){
        comandos
    }

While: é usado quando não sabe a quantidade de iterações com o bloco de comando.
Do While: o mesmo do While.
*/
console.log('Início do Programa')
for(var i = 0; i<10; i++){
    console.log('Márcia Lino valor do i: ' + i)
}

console.log('Fim do Programa')

console.log('Início de Outro Programa')
for(var i = 0; i <=100; i++){
    if(i%2==0){
        console.log(`${i} é par`)
    }else{
        console.log(`${i} é impar`)
    }
}
console.log('Fim do Segundo Programa.')