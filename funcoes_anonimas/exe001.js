/*Funções Anônimas: são aquelas que não possuem um nome associado ao seu conteúdo.Elas são criadas, mas não estão instanciadas, não ficam na memória, ela só vai ser criada no momento da execução.Elas são iguais a uma função padrão, mas não recebe um nome . Assim: function(){}*/

const f = function(v1,v2){ // a função não tem nome, mas precisa estar associada a uma variável
      return v1+v2
}
console.log(f(10,5))

const f1 = function(...valores){
    var res = 0
    for(i of valores){
        res+=i
    }
    return res
}
console.log(f(12,8))

// /* Função Construtor Anônima: nesta função acrescenta o construtor "new". Suas características são: a Function é escrita com F maiúsculo. Nos parâmev3tros, deve constar os parâmentros e o corpo da função, tudo entre aspas e separado por vírgulas.*/

const f2 = new Function("v1", "v2", "v3", "return v1+v2+v3")
console.log(f2(10,20,30))