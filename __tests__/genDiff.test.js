import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test.each([

  ['file1.json', 'file2.json', 'stylish', 'nested.test.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'nested.test.txt'],
  ['file1.json', 'file2.json', 'plain', 'nested.txt'],
  ['file1.yaml', 'file2.yaml', 'plain', 'nested.txt'],
  ['file1.json', 'file2.json', 'json', 'json.test.txt'],
  ['file1.yaml', 'file2.yaml', 'json', 'json.test.txt'],

])('\'test\'', (file1, file2, format, expected) => {
  const filepath1 = file1;
  const filepath2 = file2;

  const result = genDiff(filepath1, filepath2, format);

  expect(result).toEqual(readFile(expected));
});
