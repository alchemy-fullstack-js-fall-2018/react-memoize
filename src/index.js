export function memoize(fn, equality = defaultEquality) {
  let prevArgs;
  let result;
  return function() {
    const args = [...arguments];
    if(!equality(prevArgs, args)){
      prevArgs = args;
      result = fn(...args);
      return result;
    }
    return result;
  };
}


export function defaultEquality(prevArgs, newArgs) {
  if(!prevArgs || !newArgs || prevArgs.length !== newArgs.length) return false;

  return prevArgs.every((arg, i) => {
    return arg === newArgs[i];
  });
}

export function reactPropsEquality(prevProps, newProps) {
  if(!prevProps || !newProps) return false;

  const prevPropsKeys = Object.keys(prevProps);
  const newPropsKeys = Object.keys(newProps);
  if(prevPropsKeys.length !== newPropsKeys.length) return false;

  for(let i = 0; i < prevPropsKeys.length; i++) {
    const key = prevPropsKeys[i];
    if(!defaultEquality([prevProps[key]], [newProps[key]])) {
      return false;
    }
  }
  return true;
}

export function reactMemoize(Component) {
  return memoize(Component, reactPropsEquality);
}
