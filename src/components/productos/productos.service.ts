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
import { Respuesta, RespuestaOne } from './interfaces/respuesta.interface';
import { Repository } from 'typeorm';
import { Product } from './entity/product-entity';
import { ObtenerProductoDto } from './DTOs/ObtenerProductoDto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Product)
    private readonly productoRepository: Repository<Product>,
  ) {}

  public async obtenerProductos(): Promise<Respuesta> {
    try {
      let products = await this.productoRepository.find();

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

  public async obtenerProducto(query: any): Promise<RespuestaOne> {
    try {
      let product = await this.productoRepository.createQueryBuilder("products")
      .where('id = :id', { id: query.id })
      .getOne();

      return {
        codigo: generarUrl(CODIGO_200, false),
        folio: generarFolio(),
        mensaje: RESPUESTA_EXITOSA,
        resultado: product,
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

  public async obtenerProductosMasVendidos(): Promise<Respuesta> {
    try {
      let products = await this.productoRepository.createQueryBuilder("products")
      .where('seVendeSolo = :bestSeller', { bestSeller: 1 })
      .getMany();

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
