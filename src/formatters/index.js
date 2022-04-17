import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const format = (data, formatName = 'stylish') => {
  const format = formatters[formatName];
  if (!formatters) {
    throw new Error(`Unknown format ${formatName}`);
  }
  return format(data);
};

export default format;
