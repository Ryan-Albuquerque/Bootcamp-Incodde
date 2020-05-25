//lista de series, remover e adicionar
const series = [
  "the 100",
  "two and a half man",
  "the walking dead",
  "the trevelers",
];

const eachSeries = (series) => {
  series.forEach((element) => {
    console.log(element);
  });
};

console.log(
  "Olá, amigx \nEssas são as series que eu gosto muito de assistir:\n   "
);
eachSeries(series);

console.log("\n.\n.\n.\n");

const serieFavorita = series[1];

console.log(
  "Após uma semana vi que a minha favorita foi:",
  serieFavorita,
  "\nCom isso, acabei vendo ela muito rápido e não preciso mais dela na minha lista! :)"
);

series.splice(1, 1); //remove a serie favorita=

console.log("\n.\n.\n.\n");

console.log(
  "Dias depois, no grupo do discord da imersão da Incodde, um dos mentores havia dito que a serie Mr. Robot é muito boa, então decidi adicionar na minha lista de series para assistir...\n"
);

series.push("Mr. Robot");

console.log("Tendo minha lista da seguintes forma: \n   ");
eachSeries(series);

//fim :)