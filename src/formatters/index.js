import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';


const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
        return json(data);
    default:
      return 'format not found';
  }
};

export default format;
