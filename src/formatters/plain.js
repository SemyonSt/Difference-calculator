import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const plain = (data) => {
  const iter = (currentObj, path = '') => currentObj
    .flatMap(({
      key, type, value, children,
    }) => {
      const currentPath = ([...path, key]);
      const jointPath = currentPath.join('.');
      switch (type) {
        case 'nested':
          return iter(children, currentPath);
        case 'added':
          return `Property '${jointPath}' was added with value: ${getValue(value)}`;
        case 'removed':
          return `Property '${jointPath}' was removed`;
        case 'update':
          return `Property '${jointPath}' was updated. From ${getValue(value.value1)} to ${getValue(value.value2)}`;
        default:
          return 'null';
      }
    });
  const result = iter(data);

  return result.filter((str) => str !== 'null').join('\n');
};

export default plain;
