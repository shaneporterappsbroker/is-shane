import isShane from './index';

test('is TRUE with "Shane"', () => {
  expect(isShane('Shane')).toBe(true);
});

test('is TRUE with lowercase "shane"', () => {
  expect(isShane('shane')).toBe(true);
});

test('is TRUE with other spacing and "shane"', () => {
  expect(isShane(' shane ')).toBe(true);
});

test('is FALSE with other string', () => {
  expect(isShane('john')).toBe(false);
});

test('is Charles equal to Shane', () => {
  expect(isShane('Charles')).toBe(false);
});

test('is Shannon equal to Shane', () => {
  expect(isShane('Shannon')).toBe(false);
});

test('is Shane equal to Hussein', () => {
  expect(isShane('Hussein')).toBe(false);
});

test('is Shane equal to matthew', () => {
  expect(isShane('matthew')).toBe(false);
});
