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
    // console.log(arguments);
    const args = [...arguments];
    if(equality(prevArgs, args)) return result;
    prevArgs = args;
    return result = fn.apply(null, args);
  };
};


export const reactPropsEquality = (newArgs, prevArgs) => {
  if(newArgs === null || prevArgs === null) return false;
  const [newProps] = newArgs;
  const [prevProps] = prevArgs;
  const newLength = Object.keys(newProps).length;
  const prevLength = Object.keys(prevProps).length;

  if(prevLength !== newLength) return false;
  return Object.keys(prevProps).every(key => newProps[key] === prevProps[key]);
};



export const reactMemoize = (Component, equality = reactPropsEquality) => {
  return memoize(Component, equality);
};
