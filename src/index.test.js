import React from 'react';
import { memoize, defaultEquality } from './index';

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

    // it('calls function one time', () => {
    //   const resu
    // })
  })
})