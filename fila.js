class Fila {
  constructor() {
    this.itens = [];
  }
  enqueue(item) {
    this.itens.push(item);
  }
  isEmpty() {
    return this.itens.length == 0;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;

    return this.itens.shift();
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila();
fila.enqueue('Ferrari');
fila.enqueue('Fusca');
fila.enqueue('Del Rey');
fila.enqueue('HB20');

console.table(fila);
console.log(fila.isEmpty());

console.log(fila.front());
console.log(fila.rear());
