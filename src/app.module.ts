import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import configuration from './config/configuration';
import databaseConfig from './config/database.config';
import { ListingModule } from './listing/listing.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { SaleModule } from './sale/sale.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration, databaseConfig],
      // validationSchema: configSchema,
      // validationOptions: {
      //   allowUnknown: false,
      //   abortEarly: true,
      // },
    }),
    StoreModule,
    ClientModule,
    ListingModule,
    MarketplaceModule,
    SaleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}