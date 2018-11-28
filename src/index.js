// function reactMemoize(fn) {
//   let previousArgs = [];
//   let cachedResult;
//   return function() {
//     const args = [...arguments];
//     console.log(args);
//     if(args === previousArgs) {
//       return cachedResult;
//     }
//     previousArgs = args;
//     cachedResult = fn(args);
//     return cachedResult;
//   };
// }

export const defaultEquality = (itemA, itemB) => {
  if(itemA === itemB) {
    return true;
  }
  return false;
};

export const reactPropsEquality = (newProps, prevProps) => {
  const newLength = Object.keys(newProps).length;
  const prevLength = Object.keys(prevProps).length;
  if(prevLength !== newLength) {
    return false;
  }

  for(let i = 0; i < prevLength; i++) {
    if(!defaultEquality(prevProps[i], newProps[i])){
      return false;
    }
  }
  return true;
};
