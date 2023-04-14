// Esse tipo de função só serve para operar com dois valores


function soma(n1=0,n2=0){
    return n1+n2
}
console.log(soma(5,10))

//Para operar mais de dois valores, usa-se a função rest

function soma1 (...valores){ // usando o spread, você transforma o nº em array, chamados de parâmentros rest

    return valores.length  // pede para retornar o tamanho da array

}
console.log(soma1(10,5))

function soma3(...valores){
    var tam = valores.length
    var res = 0
    for(var i=0; i<tam; i++){
        res+=valores[i]
    }
    return res
}
    console.log(soma3(2,4,8))

    function soma4(...valores){
        var res = 0 
        for(var i of valores){
            res+=i
        }
        return res
    }
    console.log(soma4(3,5,9))