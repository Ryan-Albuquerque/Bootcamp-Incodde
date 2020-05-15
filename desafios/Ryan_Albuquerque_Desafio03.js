// Dado 2 valores inteiros X e Y. A seguir, calcule e mostre a soma
// dos números impares entre eles. O programa deve imprimir um valor inteiro.
// Este valor é a soma dos valores ímpares que estão entre os valores fornecidos
// na entrada que deverá caber em um inteiro.

let soma = 0;

const valores = (x, y) => {
  let max, min;

  if (x > y) {
    max = x;
    min = y;
  } else {
    max = y;
    min = x;
  }

  for (let index = min + 1; index < max; index++) {
    if (index % 2 != 0) {
      soma = soma + index;
    }
  }
  console.log(`\n A soma dos números ímpares entre os valores ${min} e ${max} é ${soma} \n`);
};

valores(12, 12); //indica os valores, não se preocupe com a ordem dos fatores, não alterará o resultado :)
