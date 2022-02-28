import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;

const stringify = (data, depth = 1) => {
  const iter = (currentValue, currentDepth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = currentDepth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, currentDepth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };
  const indentSize = depth * spacesCount - 2;
  const currentIndent = replacer.repeat(indentSize);
  const bracketIndent = replacer.repeat(indentSize - 2);
  const result = data.flatMap(({
    key, type, value, children,
  }) => {
    switch (type) {
      case 'nested':
        return `${currentIndent}  ${key}: ${stringify(children, depth + 1)}`;
      case 'added':
        return `${currentIndent}+ ${key}: ${iter(value, depth + 1)}`;
      case 'removed':
        return `${currentIndent}- ${key}: ${iter(value, depth + 1)}`;
      case 'update':
        return `${currentIndent}- ${key}: ${iter(value.value1, depth + 1)}\n${currentIndent}+ ${key}: ${iter(value.value2, depth + 1)}`;
      default:
        return `${currentIndent}  ${key}: ${iter(value, depth + 1)}`;
    }
  });
  return [
    '{',
    ...result,
    `${bracketIndent}}`,
  ].join('\n');
};

const stylish = (tree) => stringify(tree);
export default stylish;
