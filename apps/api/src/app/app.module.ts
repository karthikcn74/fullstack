import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StartupService } from './startup/startup.service';
import { StartupController } from './startup/startup.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, StartupController],
  providers: [AppService, StartupService]
})
export class AppModule {}
