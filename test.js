const test = require('node:test');
const assert = require('node:assert');
const tambah = require('./index.js');

test('50 + 50 harus sama dengan 100', () => {
  assert.strictEqual(tambah(50, 50), 100);
})

test('5 + 2 harus sama dengan 7', () => {
  assert.strictEqual(tambah(5, 2), 7);
})