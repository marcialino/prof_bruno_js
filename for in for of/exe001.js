var num = [10,20,30,40,50]

// mostrar os elementos da array
for(var i = 0; i <= num.length; i++){
    console.log(num[i])
}

//for in = mostra os elementos em cada uma de suas posições.
for(n in num){
    console.log(num[n])
}

//for of = mostra apenas os elementos. O resultado será o mesmo, mas por este você não consegue identificar o elemento pela sua posição

for (n of num){
    console.log(n)
}