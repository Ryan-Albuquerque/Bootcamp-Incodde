let fiboSequence = [0, 1];
let i = true,
  prev0 = fiboSequence[0],
  prev1 = fiboSequence[1];

const num = 5;

const contagemFibo = () => {
  while (i) {
    let now = prev0 + prev1;

    fiboSequence.push(now);

    prev0 = prev1;
    prev1 = now;

    if (now == num) {
      i = false;
      fiboSequence.pop(); //remove o numero em si
    }
  }
};

const listagem = () => {
  fiboSequence.forEach((element) => {
    console.log(element);
  });
};

contagemFibo()
listagem()