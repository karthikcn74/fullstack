import * as fromBrand from './brand.reducer';
import { selectBrandState } from './brand.selectors';

describe('Brand Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBrandState({
      [fromBrand.brandFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
