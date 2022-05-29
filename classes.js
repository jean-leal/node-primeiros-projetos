class Programador {
  constructor( //construtor da classe para iserir os dados
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhaDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhaDesde = trabalhaDesde;
  }
}

const jean = new Programador( //criando novo objeto e inserindo os dados utilizando o constructor
  'Jean Leal',
  '13/06/1996',
  true,
  ['JavaScript', 'PHP'],
  2010
);

console.table(jean);

for (const propriedades in jean) {
  console.log(`${propriedades}: ${jean[propriedades]}`);
}
