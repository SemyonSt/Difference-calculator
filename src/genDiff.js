import _ from 'lodash';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);

  const keys = _.union(_.keys(file1), _.keys(file2));

  const result = [];
  for (const key of keys) {
    if (!_.has(file1, key)) {
      result.push(`  + ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      result.push(`  - ${key}: ${file1[key]}`);
    } else if (file1[key] === file2[key]) {
      result.push(`    ${key}: ${file1[key]}`);
    } else { result.push(`  - ${key}: ${file1[key]} \n  + ${key}: ${file2[key]}`); }
  }
  // сортирую массив по первой букве ключа
  result.sort((a, b) => {
    const x = a.charCodeAt(4);
    const y = b.charCodeAt(4);
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  return ['{', ...result, '}'].join('\n');
};
export default genDiff;
