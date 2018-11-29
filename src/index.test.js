import { defaultEquality, reactPropsEquality, memoize, reactMemoize } from './index';

describe('memoize', () => {
  const equals = defaultEquality;
  it('returns a function', () => {
    const func = memoize();
    expect(func).toBeInstanceOf(Function);
  });

  it('calls a function', () => {
    const func = jest.fn();
    const aFn = memoize(func, equals);
    aFn();
    expect(func.mock.calls.length).toBe(1);
  });

  it('only calls a function when same arguments are passed to it', () => {
    const func = jest.fn();
    const aFn = memoize(func, equals);
    aFn(1);
    aFn(1);
    expect(func.mock.calls.length).toBe(1);
  });
});

describe('defaultEquality', () => {
  it('returns true if items are equal', () => {
    const itemA = [2];
    const itemB = [2];
    const equal = defaultEquality(itemA, itemB);

    expect(equal).toBe(true);
  });

  it('returns false if items are not equal', () => {
    const itemA = [2];
    const itemB = [4];

    const equal = defaultEquality(itemA, itemB);

    expect(equal).toBe(false);
  });
});

describe('reactPropsEquality', () => {
  it('returns true if props are equal', () => {
    const props1 = [{ x: 1 }];
    const props2 = [{ x: 1 }];

    const equal = reactPropsEquality(props1, props2);

    expect(equal).toBe(true);
  });

  it('returns false if props are not equal', () => {
    const props1 = [{ x: 1, y: 4 }];
    const props2 = [{ x: 1 }];

    const equal = reactPropsEquality(props1, props2);

    expect(equal).toBe(false);
  });
});

describe('reactMemoize', () => {
  it('doesnt rerender the component when the props passed in are the same', () => {
    const component = jest.fn();
    const props1 = { x: 1 };
    const props2 = { x: 1 };

    const mockFunc = reactMemoize(component);
    console.log(mockFunc);
    mockFunc(props1);
    mockFunc(props2);

    expect(component.mock.calls.length).toBe(1);
  });
});

