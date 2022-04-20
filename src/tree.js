import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const diffTree = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'nested',
        key,
        children: getTree(value1, value2),
      };
    }
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value: value2,
      };
    }
    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        key,
        value: value1,
      };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: 'update',
        key,
        value: { value1, value2 },
      };
    }
    return {
      type: 'unchanged',
      key,
      value: value1,
    };
  });
  return diffTree;
};

export default getTree;
