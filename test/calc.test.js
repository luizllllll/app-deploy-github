const test = require("node:test");
const assert = require("node:assert");
const { somar, subtrair, multiplicar, dividir, calcular } = require("../calc.js");

test("soma dois números", () => {
  assert.strictEqual(somar(2, 3), 5);
});

test("subtrai dois números", () => {
  assert.strictEqual(subtrair(10, 4), 6);
});

test("multiplica dois números", () => {
  assert.strictEqual(multiplicar(3, 4), 12);
});

test("divide dois números", () => {
  assert.strictEqual(dividir(10, 2), 5);
});

test("não permite divisão por zero", () => {
  assert.throws(() => dividir(5, 0));
});

test("calcular usa o operador certo", () => {
  assert.strictEqual(calcular(7, "+", 3), 10);
  assert.strictEqual(calcular(7, "*", 3), 21);
});
