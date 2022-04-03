import path from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import getTree from './tree.js';
import format from './formatters/index.js';

const buildFullPath = (filename) => path.resolve(process.cwd(), filename);

const getExtension = (filename) => path.extname(filename);

const readFiles = (filename) => readFileSync(filename, 'utf-8');

const data = (files) => {
  const getPath = buildFullPath(files);
  const extension = getExtension(files);
  const file = readFiles(getPath);

  return parse(file, extension);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = data(filepath1);
  const file2 = data(filepath2);

  const obj = getTree(file1, file2);

  const diff = format(obj, formatName);

  return diff;
};
export default genDiff;
