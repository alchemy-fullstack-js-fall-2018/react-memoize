import React from 'react';
import {
  defaultEquality,
  reactPropsEquality,
  memoize } from './Func';

describe ('defaultEquality tests', () => {

  it('returns false when comparing unequal arguments', () => {
    expect(defaultEquality(3, 4)).toBeFalse;
    expect(defaultEquality('a', 'b')).toBeFalse;
    expect(defaultEquality(6, 'b')).toBeFalse;
  });

  it('returns true when comparing equal arguments', () => {
    expect(defaultEquality(3, 3)).toBeTrue;
    expect(defaultEquality('b', 'b')).toBeTrue;
  });

});

describe ('reactPropsEquality tests', () => {

  const props1 = { title: 'a title', counter: 8, dog: 'fido' };
  const props2 = { title: 'a title', counter: 8 };
  const props3 = { title: 'a title', counter: 'a string' };

  it('returns false when comparing unequal props', () => {
    expect(reactPropsEquality(props1, props2)).toBeFalse;
    expect(reactPropsEquality(props2, props3)).toBeFalse;
    expect(reactPropsEquality(props1, props3)).toBeFalse;
  });

  it('returns true when comparing equal arguments', () => {
    const copyOfProps1 = { ...props1 };
    const copyOfProps2 = { ...props2 };
    expect(reactPropsEquality(props1, copyOfProps1)).toBeTrue;
    expect(reactPropsEquality(props2, copyOfProps2)).toBeTrue;
  });

});

describe ('memoize tests', () => {

  it('calls the function when the args have changed', ()=> {
    const mockFn = jest.fn();
    const memoizedMock = memoize(mockFn);

    memoizedMock('a', 'b');
    memoizedMock('a', 'c');
    expect(mockFn.mock.calls.length).toBe(2);
  });

  it('does not call the function when the args are the same', () => {
    const mockFn = jest.fn();
    const memoizedMock = memoize(mockFn);

    memoizedMock('a', 'b');
    memoizedMock('a', 'b');
    expect(mockFn.mock.calls.length).toBe(1);
  });

});
