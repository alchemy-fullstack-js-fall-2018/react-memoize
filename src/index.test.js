import { reactPropsEquality, reactMemoize } from './index';

describe('props equality', () => {
  it('returns true if items are equal', () => {
    const itemA = [2];
    const itemB = [2];
    const equal = reactPropsEquality(itemA, itemB);
    expect(equal).toBe(true);
  });

  it('returns false if items are equal', () => {
    const itemA = [2];
    const itemB = [3];
    const equal = reactPropsEquality(itemA, itemB);
    expect(equal).toBe(false);
  });
});

describe('memoize', () => {
  it('returns a function', () => {
    const func = reactMemoize();
    expect(func).toBeInstanceOf(Function);
  });

  it('dosent render the component if props passed are the same as previous', () => {
    const component = jest.fn();
    const props1 = { x: 1 };
    const props2 = { x: 1 };

    const mockFunc = reactMemoize(component);
    mockFunc(props1);
    mockFunc(props2);

    expect(component.mock.calls.length).toBe(1);
  });

  it('renders the component if props passed are different from previous', () => {
    const component = jest.fn();
    const props1 = { x: 1 };
    const props2 = { x: 2 };

    const mockFunc = reactMemoize(component);
    mockFunc(props1);
    mockFunc(props2);

    expect(component.mock.calls.length).toBe(2);
  });

});
