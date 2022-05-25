const redesSociais = [
  'Instagram',
  'Youtube',
  'Facebook',
  'Tiktok',
  'Twitter',
  'LinkedIn',
  'Pinterest',
];

/*const tiktok = redesSociais.indexOf('Tiktok'); // procura dentro do array o item escolhodo no indexOf
console.log(tiktok);

console.log(redesSociais.includes('Tumb')); // verificar se existe o item dentro do array */

for (let i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}

for (const i in redesSociais) {
  console.log(`${i}: ${redesSociais[i]}`);
}

for (const valor of redesSociais) {
  console.log(valor);
}

redesSociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
});

let i = 0;
while (i < redesSociais.length) {
  console.log(redesSociais[i]);
  i++;
}
