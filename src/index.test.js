import { defaultEquality, reactPropsEquality, memoize, reactMemoize } from './index';
import React from 'react';

describe('defaultEquality function', () => {
  it('returns true if two values are equal', () => {
    expect(defaultEquality([10], [10])).toBeTruthy();
  });

  it('returns false if the values are not equal', () => {
    expect(defaultEquality([10], [8])).toBeFalsy();
  });
});

describe('reactPropsEquality', () => {
  it('returns false for unequal arguments', () => {
    const obj1 = { hair: 'red', eyes: 'blue' };
    const obj2 = { hair: 'none', eyes: 'silver' };
    expect(reactPropsEquality(obj1, obj2)).toBeFalsy();
  });

  it('returns true for equal arguments', () => {
    const obj1 = { hair: 'red', eyes: 'blue' };
    const obj2 = { hair: 'red', eyes: 'blue' };
    expect(reactPropsEquality(obj1, obj2)).toBeTruthy();
  });
});

describe('memoize', () => {
  it('calls a function', () => {
    const fakeFunc = jest.fn();
    const memo = memoize(fakeFunc, defaultEquality);

    memo('hi');
    expect(fakeFunc.mock.calls.length).toBe(1);
  });

  it('only calls the supplied function once when provided the same arguments', () => {
    const fakeFunc = jest.fn();
    const memo = memoize(fakeFunc, defaultEquality);

    memo('hi');
    memo('hi');

    expect(fakeFunc.mock.calls.length).toEqual(1);
  });
});

describe('reactMemoize', () => {
  it('renders a component', () => {
    const Component = jest.fn();
    const memo = reactMemoize(Component);
    const props = { hair: 'red' };

    memo(props);
    expect(Component.mock.calls.length).toBe(1);
  });

  it('rerenders a component if passed different props', () => {
    const Component = jest.fn();
    const memo = reactMemoize(Component);
    const props1 = { hair: 'red' };
    const props2 = { hair: 'green' };

    memo(props1);
    memo(props2);

    expect(Component.mock.calls.length).toBe(2);
  });

  it.skip('does not rerender if passed the same props', () => {
    const Component = jest.fn();
    const memo = reactMemoize(Component);
    const props1 = { hair: 'red' };
    const props2 = { hair: 'red' };

    memo(props1);
    memo(props2);

    expect(Component.mock.calls.length).toBe(1);
  });
});
