import React from 'react';
import { memoize, defaultEquality, reactPropsEquality } from './index';

describe('memoization', () => {
  describe('memoize function', () => {
    const equality = defaultEquality;
    it('returns a function', () => {
      const add = function (a, b) {
        return a + b ;
      }
      const result = memoize(add(1, 2), equality);
      expect(typeof result).toBe('function');
    })
  })

  describe('default equality function', () => {
    it('returns false if args are not equal', () => {
      const result = defaultEquality(1, 2);
      expect(result).toBeFalsy();
    })

    it('returns true if args are not equal', () => {
      const result = defaultEquality(1, 1);
      expect(result).toBeTruthy();
    })
  })

  describe('reactPropsEquality function', () => {
    it('returns false if args are not equal', () => {
      const arg1 = { a: 1, b: 2 };
      const arg2 = { a: 1, b: 3 };
      const result = reactPropsEquality(arg1, arg2);
      expect(result).toBeFalsy();
    })

    it('returns true if args are equal', () => {
      const arg1 = { a: 1, b: 2 };
      const arg2 = { a: 1, b: 2 };
      const result = reactPropsEquality(arg1, arg2);
      expect(result).toBeTruthy();
    })
  })
})