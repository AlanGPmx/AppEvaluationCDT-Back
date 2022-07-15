import { Productos } from './productos.interface';

export interface Respuesta {
  codigo?: string;
  detalles?: string[];
  folio: string;
  info?: string;
  mensaje: string;
  resultado?: {
    productos: Productos[];
  };
}

export interface RespuestaOne {
  codigo?: string;
  detalles?: string[];
  folio: string;
  info?: string;
  mensaje: string;
  resultado?: Productos;
}
