import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './components/productos/entity/product-entity';
import { ProductosModule } from './components/productos/productos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env['BD_SERVIDOR'],
      port: 3306,
      username: process.env['BD_USUARIO'],
      password: process.env['BD_CLAVE'],
      database: process.env['BD_NOMBRE'],
      entities: [Product],
      autoLoadEntities: true,
      synchronize: false,
    }),
    ProductosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
