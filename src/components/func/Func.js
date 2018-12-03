import React from 'react';

export default reactMemo(function Func({ title }) {
  console.log('Func component rendered');
  return <h1>Func - {title}</h1>;
});

function reactMemo(Component) {
  let previousProps;
  let previousRender;

  return function MemoizedComponent() {
    const args = [...arguments];
    const [props] = args;

    if(reactPropsEquality(previousProps, props)) return previousRender;
    const render = <Component {...props} />;
    console.log('re-rendering');
    previousRender = render;
    previousProps = props;
    return <Component {...props} />;
  };
}

function reactPropsEquality(previousProps, props) {
  if(previousProps) {
    const keys = Object.keys(previousProps);
    return keys.every(key => {
      return previousProps[key] === props[key];
    });
  }
  else return false;
}

function memoize(fn, equality = defaultEquality) {
  let previousArguments;
  let previousResult;

  return function() {
    const args = [...arguments];

    if(equality(previousArguments, args)) return previousResult;
    console.log('updating');
    const result = fn;
    previousArguments = args;
    previousResult = result;
    return fn;
  };
}

function defaultEquality(previousArguments, args) {
  if(previousArguments) {
    if(previousArguments.length !== args.length) return false;
    return previousArguments.every((previousArgument, index) => {
      return previousArgument === args[index];
    });
  }
  else return false;
}
//once working, file with index.js & index.test.js, import react
