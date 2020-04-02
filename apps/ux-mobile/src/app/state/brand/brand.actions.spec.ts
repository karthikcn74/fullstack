import * as fromBrand from './brand.actions';

describe('loadBrands', () => {
  it('should return an action', () => {
    expect(fromBrand.loadBrands().type).toBe('[Brand] Load Brands');
  });
});
