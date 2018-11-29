import React from 'react';

export default reactMemoize(function Func({ title }) {
  console.log('Func', 'Component rendered');
  return (
    <h1>Func - {title}</h1>
  );
});

export function reactMemoize(Component) {
  let previousProps = null;
  let previousRender = null;
  
  return function MemoizeComponent() {
    const args = [...arguments];
    const [props] = args;

    if(reactPropsEquality(previousProps, props)) return previousRender;
    const render = Component(props);
    previousRender = render;
    previousProps = props;
    
    return render;
  };
} 

export function reactPropsEquality(previousProps, props) {
  console.log(previousProps);
  console.log('props', props);
  if(previousProps) {
    return Object.keys(previousProps).every(propName => {
      return previousProps[propName] === props[propName];
    });
  }
  return false;
}
