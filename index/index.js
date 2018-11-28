function reactMemoize(fn) {
  let previousArgs = [];
  let cachedResult;
  return function() {
    const args = [...arguments];
    console.log(args);
    if (args === previousArgs) {
      return cachedResult;
    }
    previousArgs = args;
    cachedResult = fn(args);
    return cachedResult;
  };
}