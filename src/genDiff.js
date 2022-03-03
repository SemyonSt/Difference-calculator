import parse from './parsers.js';
import getTree from './tree.js';
import format from './formatters/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const getPath1 = getFixturePath(filepath1);
  const getPath2 = getFixturePath(filepath2);

  const file1 = parse(getPath1);
  const file2 = parse(getPath2);


  const obj = getTree(file1, file2);

  const diff = format(obj, formatName);

  return diff;
};
export default genDiff;
