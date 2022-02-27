import parse from './parsers.js';
import getTree from './tree.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);

  const obj = getTree(file1, file2);

  const diff = format(obj, formatName);

  return diff;
};
export default genDiff;
