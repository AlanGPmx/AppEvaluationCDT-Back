import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product-entity';

@Module({
  providers: [ProductosService],
  controllers: [ProductosController],
  imports: [ TypeOrmModule.forFeature([Product]) ]
})
export class ProductosModule {}
