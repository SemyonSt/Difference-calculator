import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parseFile = (file) => {
  const format = path.extname(file);
  const files = readFileSync(file, 'utf-8');
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(files);
  }
  return JSON.parse(files);
};

export default parseFile;
