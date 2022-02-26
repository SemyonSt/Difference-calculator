import _ from 'lodash';
import parse from './parsers.js';
import getTree from './tree.js';
import stylish from './formatters/stylish.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);

  const obj = getTree(file1, file2);

  return stylish(obj);
};
export default genDiff;
