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

// function reactMemoize(Component) {

//   return MemoizedComponent() {

//   }
// }

const prevProps = { title: 'a title', counter: 6 };
const newProps = { title: 'another title', counter: 8 };

function reactPropsEquality(prevProps, newProps) {

  if(Object.keys(newProps).length !== Object.keys(prevProps).length) return false;

  let equal = true;
  Object.keys(newProps).forEach(key => {
    if(!defaultEquality(newProps[key], prevProps[key])) { equal = false; }
  });
  return equal;
}

function defaultEquality(arg1, arg2) {
  if(arg1 === arg2) return true;
  return false;
}
