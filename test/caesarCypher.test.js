import caesarCypher from '../src/caesarCypher';

test('Return cypher string', () => {
  expect(caesarCypher('tomorrow', 3)).toBe('wrpruurz');
});

test('Return cypher string case sensitive', () => {
  expect(caesarCypher('tOmOrRoW', 3)).toBe('wRpRuUrZ');
});