import yaml from 'js-yaml';

const parsers = {
  'yml': yaml.load,
  'yaml': yaml.load,
  'json': JSON.parse,
};

const parseFile = (data, extension) => {
  const parser = parsers[extension];
  if (!parser) {
    throw new Error(`unsupported extension ${extension}`);
  }
  return parser(data);
};

export default parseFile;
