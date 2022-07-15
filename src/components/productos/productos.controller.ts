import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Respuesta } from './interfaces/respuesta.interface';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  // @Get()
  @MessagePattern('obtenerProductos')
  async obtenerProductos(): Promise<Respuesta> {
    return await this.productosService.obtenerProductos();
  }
}
