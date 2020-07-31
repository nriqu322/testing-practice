import caesarCypher from '../src/caesarCypher';

test('Return cypher string', () => {
  expect(caesarCypher('tomorrow', 3)).toBe('wrpruurz');
});

test('Return cypher string case sensitive', () => {
  expect(caesarCypher('tOmOrRoW', 3)).toBe('wRpRuUrZ');
});

test('Return cypher string case sensitive', () => {
  expect(caesarCypher('ATTACK.AT.DAWN', 5)).toBe('FYYFHP.FY.IFBS');
});