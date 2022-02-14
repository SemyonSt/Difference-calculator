import { readFileSync } from 'fs';
import _ from 'lodash';

const parseFile = (file) => {
    const files = readFileSync(file, 'utf-8');
    const obj = JSON.parse(files); // Парсим файл - т.е. приводим его к виду объекта
    return obj;
  };

  export default parseFile;