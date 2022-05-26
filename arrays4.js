/*const aPagarEmReais = [10, 20, 40, 100];
//const cotacaoDolar = 5;
//const aPagarDolar = aPagarEmReais.map((valor) => valor * cotacaoDolar);
//const aPagar = aPagarEmReais.filter((valor) => valor > 30);

const aPagar = aPagarEmReais.find((valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagar);

//console.table(aPagarEmDolar);*/

const clientes = [
  ['Vanessa', 1],
  ['Gabriel', 4],
  ['Jean', 3],
  ['Andreia', 2],
  ['João', 5],
];

console.table(clientes);
clientes.sort((a, b) => a[1] - b[1]);
console.table(clientes);

const numeros = [1, 10, 5, 5000, 1.99];
console.table(numeros);
numeros.sort((a, b) => a - b); //função para controlar ordenação dos itens
console.table(numeros);
