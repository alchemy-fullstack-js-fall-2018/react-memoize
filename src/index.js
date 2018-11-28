import React from 'react';

export default function reactMemoize(Component) {
  let previousProps = null;
  let previousRender = null;
  return function MemoizedComponent() {
    const args = [...arguments];
    const [props] = args;

    if(propsEquality(previousProps, props)) return previousRender;
    const render = <Component {...props} />;

    previousRender = render;
    previousProps = props;
    return render;
  };
};

export default function memoize(fn, equality) {
  const cache = {};

  return function() {

  }
}

export default function defaultEquality(a, b) {
  return a === b;
};

export default function propsEquality(previousProps, props) {
  if(previousProps) {
    return Object.keys(previousProps).every(propName => {
      return previousProps[propName] === props[propName]
    });
  }
  return false;
};