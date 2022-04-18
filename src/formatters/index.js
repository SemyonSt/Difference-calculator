import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const format = (data, formatName = 'stylish') => {
  if (!formatters[formatName]) {
    throw new Error(`Unknown format ${formatName}`);
  }
  return formatters[formatName](data);
};

export default format;
