import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log('dirname!', __dirname);

const getFixturePath = (filename) => {
  console.log('Filename1', filename);
  return path.join(__dirname, '..', '__fixtures__', filename);
};

const readFile = (filename) => {
  console.log('Filename2', filename);
  return fs.readFileSync(getFixturePath(filename), 'utf-8');
};

test.each([

  ['file1.json', 'file2.json', 'stylish', 'nested.test.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'nested.test.txt'],
  ['file1.json', 'file2.json', 'plain', 'nested.txt'],
  ['file1.yaml', 'file2.yaml', 'plain', 'nested.txt'],
  ['file1.json', 'file2.json', 'json', 'json.test.txt'],
  ['file1.yaml', 'file2.yaml', 'json', 'json.test.txt'],

])('test%# %s and %s in %s format', (file1, file2, format, expected) => {
  const result = genDiff(file1, file2, format);

  expect(result).toEqual(readFile(expected));
});
