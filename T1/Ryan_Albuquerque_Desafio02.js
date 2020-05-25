//Maior e menor altura usando condicionais.

let alturas = [147, 169, 200, 182, 150, 230, 187, 154, 177, 161];

let max = 0, min = 0 , j = 1;

console.log("No desafio de hoje, vamos mostar o maior e o menos número da seguinte lista: ");

alturas.forEach(altura => {
    console.log("-", altura);
    
});

console.log("Estão prontos? ");

while (j<=3) {
    console.log(j);
    j++
}

const maxAltura = () =>{
    for (let index = 0; index < alturas.length; index++) {
        const altura = alturas[index];
        
        if (altura > max) {
            max = altura
        }
    }

    return max
}

const minAltura = () =>{
    for (let index = 0; index < alturas.length; index++) {
        const altura = alturas[index];
        
        if (min == 0) {
            min = altura
        }else if(altura<min){
            min = altura
        }
    }

    return min
}


console.log("O maior valor é ", maxAltura());
console.log("O menor valor é ", minAltura());
