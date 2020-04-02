import { StartupFacade } from './startup/startup.facade';
import { ProductsFacade } from './products/products.facade';
import * as productAction from './products/products.actions';
import * as startupAction from './startup/startup.actions';
import * as brandAction from './brand/brand.actions';
import { BrandsFacade } from './brand/products.facade';
export function appInit(startupFacade: StartupFacade, productsFacade: ProductsFacade, brandsFacade: BrandsFacade) {
    return (): Promise<any> => {
        startupFacade.dispatch(startupAction.loadStartup());
        productsFacade.dispatch(productAction.loadProducts());
        brandsFacade.dispatch(brandAction.loadBrands());
        
        return Promise.resolve("true");
    }
}