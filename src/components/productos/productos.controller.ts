import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ObtenerProductoDto } from './DTOs/ObtenerProductoDto.dto';
import { Respuesta, RespuestaOne } from './interfaces/respuesta.interface';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  // @Get()
  @MessagePattern('obtenerProductos')
  async obtenerProductos(): Promise<Respuesta> {
    return await this.productosService.obtenerProductos();
  }

  // @Get()
  @MessagePattern('obtenerProducto')
  async obtenerProducto(query: ObtenerProductoDto): Promise<RespuestaOne> {
    return await this.productosService.obtenerProducto(query);
  }

  // @Get()
  @MessagePattern('obtenerProductosMasVendidos')
  async obtenerProductosMasVendidos(): Promise<Respuesta> {
    return await this.productosService.obtenerProductosMasVendidos();
  }
}
