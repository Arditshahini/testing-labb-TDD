import {
    isEmailValid,
    isZipCodeValid,
    makeHeading,
    formatPrice,
    getGenitive,
    getGroups,
    getUsers,
    isLowerCase,
    isPrimeNumber,
  } from './functions';


  test('isEmailValid()', () => {
    expect(isEmailValid('jonatan@gmail.com')).toBe(true);
    expect(isEmailValid('ardit.shahini@iths.se')).toBe(true);

    expect(isEmailValid('jonatan@gmail')).toBe(false);
    expect(isEmailValid('jonatan.com')).toBe(false);
  });

  test('isZipCodeValid()', () => {
    expect(isZipCodeValid('12345')).toBe(true);
    expect(isZipCodeValid('1234')).toBe(false);
    expect(isZipCodeValid('123456')).toBe(false);
    expect(isZipCodeValid('abcde')).toBe(false);
  });

  test('makeHeading()', () => {
    expect(makeHeading('Hello', 1)).toBe('<h1>Hello</h1>');
    expect(makeHeading('Next level', 2)).toBe('<h2>Next level</h2>');

    expect(() => makeHeading('Hello', 0)).toThrow();
    expect(() => makeHeading('Next level', -10)).toThrow();
  });


  test('formatPrice()', () => {
    expect(formatPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
    expect(formatPrice(1.9, '%PRICE%')).toBe('1.90');
    expect(formatPrice(123, 'USD %PRICE%')).toBe('USD 123.00');
    expect(formatPrice(299.3984, '%PRICE% NOK')).toBe('299.40 NOK');
    expect(formatPrice(12.99, '$%PRICE%')).toBe('$12.99');

    expect(() => formatPrice(-99, '%PRICE%')).toThrow();
    expect(() => formatPrice(1234, 'SEK ')).toThrow();
  });

  test('isLowerCase()', () => {
    expect(isLowerCase('ardit')).toBe(true);
    expect(isLowerCase('ardit shahini')).toBe(true);
    expect(isLowerCase('ardit shahini 1')).toBe(true);
    expect(isLowerCase('ardit shahini 1 !')).toBe(true);

    expect(isLowerCase('Ardit')).toBe(false);
    expect(isLowerCase('Ardit Shahini')).toBe(false);
    expect(isLowerCase('Ardit Shahini 1')).toBe(false);
    expect(isLowerCase('Ardit Shahini 1 !')).toBe(false);
  });

  test('isPrimeNumber()', () => {
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(3)).toBe(true);
    expect(isPrimeNumber(5)).toBe(true);

    expect(isPrimeNumber(1)).toBe(false);
    expect(isPrimeNumber(4)).toBe(false);
    expect(isPrimeNumber(6)).toBe(false);
  });

  test('getGenitive()', () => {
    expect(getGenitive('Jonatan')).toBe('Jonatans');
    expect(getGenitive('Anna')).toBe('Annas');
    expect(getGenitive('Claes')).toBe('Claes');
    expect(getGenitive('Hampus')).toBe('Hampus');
    expect(getGenitive('Johanna')).toBe('Johannas');
  });

  test('getUsers()', async () => {
    const users = await getUsers();

    expect(users[0].name).toBe('Erik');
    expect(users[1].name).toBe('Lisa');
    expect(users[2].name).toBe('Hampus');
    expect(users[3].name).toBe('Linda');
    expect(users[4].name).toBe('Eva');
    expect(users[5].name).toBe('Anna');

    expect(users[0].group).toBe(1);
    expect(users[1].group).toBe(2);
    expect(users[2].group).toBe(2);
    expect(users[3].group).toBe(3);
    expect(users[4].group).toBe(1);
    expect(users[5].group).toBe(3);

    expect(users.length).toBe(6);
  });

  test('getGroups()', async () => {
    const groups = await getGroups();

    expect(groups[0].id).toBe(1);
    expect(groups[1].id).toBe(2);
    expect(groups[2].id).toBe(3);

    expect(groups[0].groupName).toBe('Hajarna');
    expect(groups[1].groupName).toBe('Valarna');
    expect(groups[2].groupName).toBe('Zebrorna');

    expect(groups.length).toBe(3);

  });
