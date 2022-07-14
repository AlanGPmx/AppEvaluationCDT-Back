import { AREA, CODIGO_400, CODIGO_401, CODIGO_404, CODIGO_409, CODIGO_500, ENLACE_BASE } from '../config/constantes';

export const generarUrl = (codigo: number, esInfo: boolean): string => {
    let condigoInterno: string;
    const nombreMso = 'Transacciones';
    
    switch (codigo){
        case CODIGO_400: condigoInterno = '4000';
        break;
    
        case CODIGO_401: condigoInterno = '106401';
        break;
    
        case CODIGO_404: condigoInterno = '4002';
        break;
    
        case CODIGO_409: condigoInterno = '4003';
        break;
    
        case CODIGO_500: condigoInterno = '5000';
        break;
    }
  
    return esInfo
        ? `${ ENLACE_BASE }${ codigo }.${ AREA }-${ nombreMso }.${ condigoInterno }`
        : `${ codigo }.${ AREA }-${ nombreMso }.${ condigoInterno }`;
}