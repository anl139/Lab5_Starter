// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


test('isPhoneNumber - valid formats', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber - valid formats', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - invalid formats', () => {
  expect(isPhoneNumber('1234789-0')).toBe(false);
});
test('isPhoneNumber - invalid formats', () => {
  expect(isPhoneNumber('12456890')).toBe(false);
});

test('isEmail - valid emails', () => {
  expect(isEmail('asfcda@example.com')).toBe(true);
});
test('isEmail - valid emails', () => {
  expect(isEmail('anlam@domain.org')).toBe(true);
});

test('isEmail - invalid emails', () => {
  expect(isEmail('notanemail.com')).toBe(false);
});
test('isEmail - invalid emails', () => {
  expect(isEmail('notanemail.com')).toBe(false);
});

test('isStrongPassword - valid passwords', () => {
  expect(isStrongPassword('couterofferas')).toBe(true);
});
test('isStrongPassword - valid passwords', () => {
  expect(isStrongPassword('asdfaecds32')).toBe(true);
});

test('isStrongPassword - invalid passwords', () => {
  expect(isStrongPassword('1234')).toBe(false);
});
test('isStrongPassword - invalid passwords', () => {
  expect(isStrongPassword('a!@#')).toBe(false);
});

test('isDate - valid dates', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('isDate - valid dates', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('isDate - invalid dates', () => {
  expect(isDate('2023/01/01')).toBe(false);
});

test('isDate - invalid dates', () => {
  expect(isDate('131/01/2023')).toBe(false);
});
test('isHexColor - valid hex codes', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('isHexColor - valid hex codes', () => {
  expect(isHexColor('#A1B2C3')).toBe(true);
});

test('isHexColor - invalid hex codes', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});

test('isHexColor - invalid hex codes', () => {
  expect(isHexColor('1234567')).toBe(false);
});

