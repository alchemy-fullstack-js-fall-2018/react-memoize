import { memoize, reactMemoize, defaultEquality, reactPropsEquality } from './index';

describe('memoization', () => {
  describe('memoize function', () => {
    const equality = defaultEquality;
    it('returns a function', () => {
      const fn = jest.fn();
      const result = memoize(fn, equality);
      expect(typeof result).toBe('function');
    });

    it('calls the function passed as params once', () => {
      const fn = jest.fn();
      const result = memoize(fn, equality);
      result();
      expect(fn.mock.calls.length).toBe(1);
    });

    it('calls the function passed as params once when arguments are the same', () => {
      const fn = jest.fn();
      const result = memoize(fn, equality);
      result(1);
      result(1);
      expect(fn.mock.calls.length).toBe(1);
    });
  });

  describe('default equality function', () => {
    it('returns false if args are not equal', () => {
      const result = defaultEquality([1], [2]);
      expect(result).toBeFalsy();
    });

    it('returns false if different lengths', () => {
      const result = defaultEquality([1, 2], [1, 2, 3]);
      expect(result).toBeFalsy();
    });

    it('returns true if args are not equal', () => {
      const result = defaultEquality([1, 2], [1, 2]);
      expect(result).toBeTruthy();
    });
  });

  describe('reactPropsEquality function', () => {
    it('returns false if args are not equal', () => {
      const arg1 = { a: 1, b: 2 };
      const arg2 = { a: 1, b: 3 };
      const result = reactPropsEquality(arg1, arg2);
      expect(result).toBeFalsy();
    });

    it('returns true if args are equal', () => {
      const arg1 = { a: 1, b: 2 };
      const arg2 = { a: 1, b: 2 };
      const result = reactPropsEquality(arg1, arg2);
      expect(result).toBeTruthy();
    });
  });

  describe('reactMemoize', () => {

    it('returns a Component', () => {
      const Component = jest.fn();
      const result = reactMemoize(Component);
      expect(typeof result).toEqual('function');
    });

    it('calls the function passed as params once', () => {
      const Component = jest.fn();
      const result = reactMemoize(Component);
      result();
      expect(Component.mock.calls.length).toBe(1);
    });

    it('calls the function passed as params once', () => {
      const Component = jest.fn();
      const result = reactMemoize(Component);
      result();
      result();
      expect(Component.mock.calls.length).toBe(1);
    });
  });
});
