import { Controller, Get } from '@nestjs/common';
import { Message } from '@nestjs/common/interfaces/external/kafka-options.interface';
import { ProductsService } from './products.service';
import { IProduct, IBrand } from '@uxhm/api-interfaces';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get('all')
    getProducts(): Array<IProduct> {
      return this.productsService.getProducts();
    }

    @Get('brands')
    getBrands(): Array<IBrand> {
      return this.productsService.getBrands();
    }
}
