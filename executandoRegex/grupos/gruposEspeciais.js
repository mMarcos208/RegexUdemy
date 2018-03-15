const texto = 'João é calmo, mas no transito fica nervoso.';

const expressao = /[\wÁ-ú]+/gi; //não é um grupo
const expressao2 = /[\wÁ-ú]+(?=,)/gi; //Positive look hard
console.log(texto.match(expressao));
console.log(texto.match(expressao2));
