import React from 'react';

export function Func(props) {
  console.log('Func re-rendering');
  return (
    <h1>Func - {props.title}</h1>
  );
}

export const MemoizedFunc = reactMemoize(Func);

export function reactMemoize(Component) {

  let previousProps = null;
  let previousRender = null;

  return function MemoizedComponent() {

    const args = [...arguments];
    const [props] = args;

    if(reactPropsEquality(props, previousProps)) return previousRender;

    const render = Component(props);

    previousProps = props;
    previousRender = render;
    return render;
  };

}

// mostly from class
export function memoize(fn) {
  const cache = {};

  return function() {
    const args = [...arguments];
    const hash = hashArguments(args);

    if(cache.hasOwnProperty(hash)) return cache[hash];

    const result = fn.apply(null, args);
    cache[hash] = result;
    return result;
  };
}

function hashArguments(args) {
  return args.join('--');
}


export function reactPropsEquality(prevProps, newProps) {
  if(prevProps === null || newProps === null) return false;

  const prevLen = Object.keys(prevProps).length;
  const newLen = Object.keys(newProps).length;

  if(prevLen !== newLen) return false;

  let equal = true;
  Object.keys(newProps).forEach(key => {
    if(!defaultEquality(newProps[key], prevProps[key])) { equal = false; }
  });
  return equal;
}


export function defaultEquality(arg1, arg2) {
  return arg1 === arg2;
}
