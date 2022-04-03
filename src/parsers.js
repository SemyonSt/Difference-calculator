import yaml from 'js-yaml';

const parseFile = (file, extension) => {
  if (extension === '.yaml' || extension === '.yml') {
    return yaml.load(file);
  }
  return JSON.parse(file);
};

export default parseFile;
