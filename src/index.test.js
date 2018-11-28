import { defaultEquality, reactPropsEquality } from './index';

describe('defaultEquality', () => {
  it('returns true if items are equal', () => {
    const itemA = 2;
    const itemB = 2;
    const equal = defaultEquality(itemA, itemB);

    expect(equal).toBe(true);
  });

  it('returns false if items are not equal', () => {
    const itemA = 2;
    const itemB = 4;

    const equal = defaultEquality(itemA, itemB);

    expect(equal).toBe(false);
  });
});

describe('reactPropsEquality', () => {
  it('returns true if props are equal', () => {
    const props1 = { x: 1 };
    const props2 = { x: 1 };

    const equal = reactPropsEquality(props1, props2);

    expect(equal).toBe(true);
  });

  it('returns false if props are not equal', () => {
    
  });
});
