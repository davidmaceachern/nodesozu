import { connect } from '../src';

describe('Nodesozu client:', () => {
  it('connects to sozu', () => {
    expect(connect()).toEqual(2);
  });
});
