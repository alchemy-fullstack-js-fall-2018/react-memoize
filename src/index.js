import React from 'react';


export function memoize(fn, equality = defaultEquality) {
  let prevArgs;
  let prevFn;
  const args = [...arguments];
  return function() {
    if(!equality(prevArgs, args)){
      prevArgs = args;
      prevFn = fn;
      return fn;
    }
    return prevFn;
  }
};

const add = (a, b) => { return a + b; }
const memoizer = memoize(add(1,2))
console.log(memoizer)

// function reactMemoize(Component) {

// }

export function defaultEquality(a, b) {
  return a && (a === b);
};

function reactPropsEquality(prevProps, newProps) {

  if(prevProps === null || newProps === null) return false;

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