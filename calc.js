// Funções da calculadora (usadas no navegador e nos testes)
function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
  if (b === 0) throw new Error("Não é possível dividir por zero");
  return a / b;
}

function calcular(a, operador, b) {
  switch (operador) {
    case "+": return somar(a, b);
    case "-": return subtrair(a, b);
    case "*": return multiplicar(a, b);
    case "/": return dividir(a, b);
    default: throw new Error("Operador inválido");
  }
}

if (typeof module !== "undefined") {
  module.exports = { somar, subtrair, multiplicar, dividir, calcular };
}
