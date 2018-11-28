export const defaultEquality = (itemA, itemB) => {
  if(!itemA || itemA.length !== itemB.length) {
    return false;
  }
  return itemA.every((_, index) => itemA[index] === itemB[index]);
};

export const memoize = (fn, equality = defaultEquality) => {
  let prevArgs = null;
  let result = null;

  return function() {
    const args = [...arguments];
    if(equality(prevArgs, args)) return result;
    prevArgs = args;
    return result = fn.apply(null, args);
  };
};


export const reactPropsEquality = ([newProps], [prevProps]) => {
  if(prevProps === null || newProps === null) return false;

  const newLength = Object.keys(newProps).length;
  const prevLength = Object.keys(prevProps).length;

  if(prevLength !== newLength) return false;
  return Object.keys(prevProps).every(key => newProps[key] === prevProps[key]);
};



export const reactMemoize = (Component, equality = reactPropsEquality) => {
  return memoize(Component, equality);
};
