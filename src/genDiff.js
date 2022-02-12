import { readFileSync } from 'fs';
import _ from 'lodash';

// Читаем файл
export default (filepath1, filepath2) => {
  const file1 = readFileSync(filepath1, 'utf-8');
  // const file1 = String(readFileSync('__fixtures__/file1.json')); Выдает так же, как и через utf-8

  const file2 = readFileSync(filepath2, 'utf-8');
  // Парсим файл - т.е. приводим его к виду объекта
  const obj1 = JSON.parse(file1);
  const obj2 = JSON.parse(file2);
  genDiff(obj1, obj2);
};

const genDiff = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));

  const result = [];
  for (const key of keys) {
    if (!_.has(obj1, key)) {
      result.push(`+ ${key}: ${obj2[key]}`);
    } else if (!_.has(obj2, key)) {
      result.push(`- ${key}: ${obj1[key]}`);
    } else if (obj1[key] === obj2[key]) {
      result.push(`  ${key}: ${obj1[key]}`);
    } else { result.push(`- ${key}: ${obj1[key]} \n+ ${key}: ${obj2[key]}`); }
  }
  // сортирую массив по первой букве ключа
  result.sort((a, b) => {
    const x = a.charCodeAt(2);
    const y = b.charCodeAt(2);
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  console.log(['{', ...result, '}'].join('\n'));
};
