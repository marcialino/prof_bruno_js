const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]


console.log(objs1) // o console.log vai dar erro. Abra o brower e clique em inspencionar
console.log(objs2)

/* Ao inspecionar a página, você verá que ,a const objs2, usando o spread foi transformada em uma array. Que apresenta muito mais funções do que o objs1. Para ver isso digite objs2.*/

objs2.forEach(element =>{
    console.log(element)
})
/*como o objs2 se transformou em uma array você pode fazer várias operações, fora do HTML Colletions. Por exemplo o forEach, que mostra todos os elementos das DIV.*/

objs2.forEach(element => {
    element.innerHTML = "curso" // mudar para que todas as DIV receba o nome: curso
})