const fs = require('fs');
const r = require("./rules");
const p = require('./receiveAndPrepareInput');
const s = require('./search');
const remove = require('./removeDupes');
const print = require('./printResults'); 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});