import { obtenerFecha } from './obtenerFecha';

export const validaFecha = (fecha: Date | string): boolean => {
  const formatoFecha = obtenerFecha(fecha).replace(/\//g, '-');  

  const expReg = /^\d{4}-\d{2}-\d{2}$/;

  if (formatoFecha.match(expReg) === null) return false;
  
  const date = new Date(formatoFecha);
  const timestamp = date.getTime();
  
  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) return false;

  return true;
}