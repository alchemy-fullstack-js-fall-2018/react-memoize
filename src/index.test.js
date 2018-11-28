import reactPropsEquality from './index';

describe('props equality', () => {

  it('returns false if current props are different than previous props', () => {
    let previousProps = 10;
    let props = 20;
    let result = reactPropsEquality(previousProps, props);
    expect(result).toEqual(false);
  });
});
