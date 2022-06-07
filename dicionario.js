const meuDicionario = new Map();

meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');

console.table(meuDicionario);

const palavra = meuDicionario.get('blz');
console.log(palavra);

const listaTelefonica = new Map();

const indiceContatos = [
  ['gabriel', '9989556'],
  ['vanessa', '5131313'],
  ['jean', '212132'],
];

//listaTelefonica.set(['gabriel', '9989556']);
listaTelefonica.set(indiceContatos[0], { nascimento: '01/02/2020' });
listaTelefonica.set(indiceContatos[1], { nascimento: '10/05/1996' });
listaTelefonica.set(indiceContatos[2], { nascimento: '05/02/2010' });

console.table(listaTelefonica);

const jean = listaTelefonica.get(indiceContatos[2]);
console.table(jean);
