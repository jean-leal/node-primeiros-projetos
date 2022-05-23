/*const conta_poupaca = 1000;
const conta_corrente = 5000;
const total = conta_corrente + conta_poupaca;

console.log(total);
*/
const saldo_conta = [200, 500, 150, 450, 10.5];

const total = saldo_conta.reduce((acumulador, valor) => acumulador + valor);

console.log(total);
