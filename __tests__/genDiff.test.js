import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFile('stylish.test.txt');
const expectedPlain = readFile('plain.test.txt');
const expectedJson = readFile('json.test.txt');

const extencion = [['json'], ['yaml']];

test.each(extencion)('test %s', (ext) => {
  const filepath1 = getFixturePath(`file1.${ext}`);
  const filepath2 = getFixturePath(`file2.${ext}`);

  expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
});
