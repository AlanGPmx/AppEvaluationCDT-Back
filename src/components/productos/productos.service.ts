import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CODIGO_200,
  CODIGO_500,
  ERROR_INESPERADO,
  ERROR_INTERNO_SERVIDOR,
  RESPUESTA_EXITOSA,
} from 'src/config/constantes';
import { generarFolio } from 'src/helpers/generarFolio';
import { generarUrl } from 'src/helpers/generarUrl';
import { Respuesta } from './interfaces/respuesta.interface';
import { Repository } from 'typeorm';
import { Product } from './entity/product-entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Product)
    private readonly productoRepository: Repository<Product>,
  ) {}

  public async obtenerProductos(): Promise<Respuesta> {
    try {
      let products = await this.productoRepository
        .find();

      return {
        codigo: generarUrl(CODIGO_200, false),
        folio: generarFolio(),
        mensaje: RESPUESTA_EXITOSA,
        resultado: {
          productos: products,
        },
      };
    } catch (error) {
      return {
        codigo: generarUrl(CODIGO_500, false),
        folio: generarFolio(),
        mensaje: ERROR_INTERNO_SERVIDOR,
        info: generarUrl(CODIGO_500, true),
        detalles: [error],
      };
    }
  }
}
