import React from 'react';

export function reactMemoize(Component) {

}

// let previousProps = null;
//   let previousRender = null;
//   return function MemoizedComponent() {
//     const args = [...arguments];
//     const [props] = args;

//     if(propsEquality(previousProps, props)) return previousRender;
//     const render = <Component {...props} />;

//     previousRender = render;
//     previousProps = props;
//     return render;
//   };

export function memoize(fn, equality = defaultEquality) {
  const cache = {};

  return function() {

  };
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
