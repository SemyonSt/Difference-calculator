import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const equlGenn = '{\n- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50 \n+ timeout: 20\n+ verbose: true\n}';

test('gendiff.json', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const actual = genDiff(filepath1, filepath2);
  expect(actual).toEqual(equlGenn);
});

test('gendiff.yaml', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');
  const actual = genDiff(filepath1, filepath2);
  expect(actual).toEqual(equlGenn);
});
