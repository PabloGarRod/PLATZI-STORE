import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo!!';
  }

  @Get('nuevo')
  newEndpoint() {
    return `Yo soy nuevo.`;
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/ nueva ruta';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
    @Query('brand') brand: string,
  ): string {
    return `Products: limit=> ${limit}, offset=> ${offset}, brand=> ${brand}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return 'yo soy un filter';
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Product id: ${id}`;
  }

  @Get('categories/:id/products/:ID')
  getCategory(@Param('id') id: string, @Param('ID') ID: string) {
    return `
    Categorie: ${id}
    ID: ${ID}
    `;
  }
}
