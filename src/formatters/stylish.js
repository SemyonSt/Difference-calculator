import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;

const stringify = (value, depth) => {
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
  return iter(value, depth)
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const indentSize = depth * spacesCount - 2;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - 2);
    const result = node.flatMap(({
      key, type, value, children,
    }) => {
      switch (type) {
        case 'nested':
          return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`;
        case 'added':
          return `${currentIndent}+ ${key}: ${stringify(value, depth + 1)}`;
        case 'removed':
          return `${currentIndent}- ${key}: ${stringify(value, depth + 1)}`;
        case 'update':
          return `${currentIndent}- ${key}: ${stringify(value.value1, depth + 1)}\n${currentIndent}+ ${key}: ${stringify(value.value2, depth + 1)}`;
        default:
          return `${currentIndent}  ${key}: ${stringify(value, depth + 1)}`;
      }
    });
    return [
      '{',
      ...result,
      `${bracketIndent}}`,
    ].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
