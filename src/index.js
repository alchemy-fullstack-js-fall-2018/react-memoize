export function memoize(fn, equality = defaultEquality) {
  let previousArgs = null;
  let result = null;
  return function() {
    const args = [...arguments];

    if(equality(previousArgs, args)) return result;

    previousArgs = args;
    return result = fn.apply(null, args);
  };
}

export function reactMemoize(Component, equality = reactPropsEquality) {
  return memoize(Component, equality);
}

export function defaultEquality(previousArgs, newArgs) {
  if(!previousArgs || !newArgs
      || previousArgs.length !== newArgs.length) {
    return false;
  }
  return previousArgs.every((arg, index) => arg === newArgs[index]);
}

export function reactPropsEquality(previousProps, newProps) {
  if(!previousProps || !newProps) return false;
  if(Object.keys(previousProps).length !== Object.keys(newProps).length) {
    return false;
  }
  return Object.keys(previousProps).every(key => {
    return previousProps[key] === newProps[key];
  });

}
