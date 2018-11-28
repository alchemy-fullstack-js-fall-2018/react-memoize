import React from 'react';

// export default React.memo(function Func({ title }) {
//   console.log('Func', 'Component redered');
//   return (
//     <h1>Func - {title}</h1>
//   );
// })

export default function Func(props) {
  console.log('Func', 'Component rendered');
  console.log('props', props);
  // console.log('prevProps', this.prevProps);
  return (
    <h1>Func - {props.title}</h1>
  );
}

// from class
export function memoize(fn) {
  const cache = {};

  return function() {
    const args = [...arguments];
    console.log('args', args);
    console.log('cache', cache);
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

export function reactMemoize(Component) {

  let previousProps = null;
  let previousRender = null;

  return MemoizedComponent() {

      const args = [...arguments];
      const [props] = args;
      return <Component {...props} />;

      if (reactPropsEquality) return previous render
      const render = <Component {...props} />;


    if(reactPropsEquality(previousProps, Component.props)) return previousResults;

    const result = Component.apply(null, Component.props);
    let previousProps = Component.props;
    let previousResult = result;

    return result;
  }

}


export function reactPropsEquality(prevProps, newProps) {

  const prevLen = Object.keys(prevProps).length;
  const newLen = Object.keys(newProps).length;

  if(prevLen !== newLen) return false;

  for(let i = 0; i < prevLen; i++) {
    if(!defaultEquality(prevProps[i], newProps[i])) {
      return false;
    }
  }
  return true;

  // This also works, but doesn't jump out of the loop early when false.
  // let equal = true;
  // Object.keys(newProps).forEach(key => {
  //   if(!defaultEquality(newProps[key], prevProps[key])) { equal = false; }
  // });
  // return equal;
}


export function defaultEquality(arg1, arg2) {
  return arg1 === arg2;
}
