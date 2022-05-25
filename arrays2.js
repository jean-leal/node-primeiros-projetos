/* let meuArray = ['Vanessa', 'Grabriel', 'Jean'];
let meuArray2 = new Array();
let meuArray3 = new Array('Julio');

console.table(meuArray);
console.table(meuArray2);
console.table(meuArray3);*/
let frutas = new Array('Abacaxi');

frutas.push('Banana'); // push --insere após o ultimo indice do array
frutas.push('Abacate');
frutas.push('Melão');
frutas.unshift('Tangerina'); // unshift --adiciona no primeiro indice do array
console.table(frutas);

frutas.pop(); //remove o ultimo item do array
frutas.shift(); // remove o primeiro item
frutas.splice(2, 1); // remove o item escolhido, passando primeiro qual o indice e segundo quantos apagar(ex 1 = apaga somente o item escolhido, 2 = apaga o item escolhido e o proximo), ele também subistitui é só colocar o nome do item depois da proxima virgula.
console.table(frutas);
