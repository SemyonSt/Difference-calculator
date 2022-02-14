import { readFileSync } from 'fs';
import _ from 'lodash';

// Читаем файл
const parseFile = (file) => {
  const files = readFileSync(file, 'utf-8');
  const obj = JSON.parse(files); // Парсим файл - т.е. приводим его к виду объекта
  return obj
}

const genDiff = (filepath1, filepath2) => {
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);

  const keys = _.union(_.keys(file1), _.keys(file2));

  const result = [];
  for (const key of keys) {
    if (!_.has(file1, key)) {
      result.push(`+ ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      result.push(`- ${key}: ${file1[key]}`);
    } else if (file1[key] === file2[key]) {
      result.push(`  ${key}: ${file1[key]}`);
    } else { result.push(`- ${key}: ${file1[key]} \n+ ${key}: ${file2[key]}`); }
  }
  // сортирую массив по первой букве ключа
  result.sort((a, b) => {
    const x = a.charCodeAt(2);
    const y = b.charCodeAt(2);
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  return ['{', ...result, '}'].join('\n');
}
export default genDiff;
