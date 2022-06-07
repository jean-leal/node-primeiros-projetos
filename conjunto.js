const meuConjunto = new Set(); // não repete conteudos iguais.

const times = ['São Paulo', 'Flamengo', 'Fluminense', 'Palmeiras', 'São Paulo'];
const meuCampeonato = new Set(times);

meuCampeonato.add('Santos');
const grupo = ['Sport', 'Guarani']; // considera grupo como objeto diferente, mesmo contendo o mesmo contudo de array abaixo.
meuCampeonato.add(grupo);
meuCampeonato.add(['Sport', 'Guarani']);

meuCampeonato.delete(grupo);
meuCampeonato.forEach((valor) => {
  console.table(valor);
});

const valoresCampeonato = meuCampeonato.values();
console.table(valoresCampeonato.next().value);
console.table(valoresCampeonato.next().value);

for (let valor of valoresCampeonato) {
  //acessando todos os valores.
  console.log(valor);
}
