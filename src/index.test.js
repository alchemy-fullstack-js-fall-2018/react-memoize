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
