function canal(){
    var n1 = 15
    var n2 = 23
    var res = n1*n2
        
    if(res%2 == 0){
        return "PAR"  /*A Função com return, admite apenas um resultado. Depois do return, interrompe a função e informa o valor*/
    }else{
        return "IMPAR"
    }    
}
res = canal()
console.log(res)