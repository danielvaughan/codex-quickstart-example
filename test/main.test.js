const assert = require("node:assert/strict");
const test = require("node:test");

const { calculateCartTotal } = require("../main");

test("calculateCartTotal multiplies each item price by its quantity", () => {
  const items = [
    { name: "Notebook", price: 4, quantity: 2 },
    { name: "Pen", price: 1.5, quantity: 3 }
  ];

  assert.equal(calculateCartTotal(items), 12.5);
});

test("calculateCartTotal returns 0 for an empty cart", () => {
  assert.equal(calculateCartTotal([]), 0);
});
