import { defaultEquality } from './index';
import React from 'react';

describe('defaultEquality function', () => {
  it('returns true if two values are equal', () => {
    expect(defaultEquality([10], [10])).toBeTruthy();
  });

  it('returns false if the values are not equal', () => {
    expect(defaultEquality([10], [8])).toBeFalsy();
  })
});