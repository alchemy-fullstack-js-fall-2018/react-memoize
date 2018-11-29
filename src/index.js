import React from 'react';


export function memoize(fn, equality = defaultEquality) {
  let prevArgs, result;
  return function() {
    const args = [...arguments];
    if(!equality(prevArgs, args)){
      prevArgs = args;
      result = fn(...args);
      return result;
    }
    return result;
  }
};


export function defaultEquality(prevArgs, newArgs) {
  if(!prevArgs || !newArgs) return false;
  return prevArgs === newArgs;
};

export function reactPropsEquality(prevProps, newProps) {

  if(!prevProps || !newProps) return false;

  const prevPropsKeys = Object.keys(prevProps);
  const newPropsKeys = Object.keys(newProps);
  if (prevPropsKeys.length !== newPropsKeys.length) return false;

  for (let i = 0; i < prevPropsKeys.length; i++) {
    const key = prevPropsKeys[i];
    if (!defaultEquality(prevProps[key], newProps[key])) {
      return false;
    }
  }
  return true;
};

function reactMemo(Component) {
  let prevProps = null;
  let prevRender = null;
}

// function reactMemo(Component, equality = reactPropsEquality) {
//   let prevProps = null;
//   let previousRender = null;
//   return memoize(Component, equality);
//   return function MemoizedComponent() {
//     const args = [...arguments];
//     const [props] = args;
//     if(equality(prevProps, props)) return previousRender;
//     const render = <Component {...props} />
//     previousRender = render;
//     prevProps = props;
//     return render;
//   }
// };