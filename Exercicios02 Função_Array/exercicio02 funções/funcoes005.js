//Recursividade = Quando uma função chama ela mesma
function fatorial(n){
    if (n == 1){
        return 1
    }else{       //Aqui está a função sendo chamada novamente"
        return n * fatorial(n-1)
    }

}

console.log(fatorial(5))



//Recursão = Quando uma função chama ela mesma

/*
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/ 
