import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/genDiff.js';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');


test('gendiff.json', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  const equlGenn = readFile('plain.test.txt');
  const actual = genDiff(filepath1, filepath2);
  expect(actual).toEqual(equlGenn);
});

test('gendiff.yaml', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');

  const equlGenn = readFile('plain.test.txt');
  const actual = genDiff(filepath1, filepath2);
  expect(actual).toEqual(equlGenn);
});

test('nestedGendiff.json', () => {
  const filepath1 = getFixturePath('file3.json');
  const filepath2 = getFixturePath('file4.json');

  const equlGenn = readFile('nested.test.txt');
  const actual = genDiff(filepath1, filepath2);
  expect(actual).toEqual(equlGenn);
});

test('nestedGendiff.yaml', () => {
  const filepath1 = getFixturePath('file3.yaml');
  const filepath2 = getFixturePath('file4.yaml');

  const equlGenn = readFile('nested.test.txt');
  const actual = genDiff(filepath1, filepath2);
  expect(actual).toEqual(equlGenn);
});