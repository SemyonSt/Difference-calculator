import path from 'path';
import parse from './parsers.js';
import getTree from './tree.js';
import format from './formatters/index.js';

const buildFullPath = (filename) => path.resolve(process.cwd(), filename);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const getPath1 = buildFullPath(filepath1);
  const getPath2 = buildFullPath(filepath2);

  const file1 = parse(getPath1);
  const file2 = parse(getPath2);

  const obj = getTree(file1, file2);

  const diff = format(obj, formatName);

  return diff;
};
export default genDiff;
