export const generarFolio = (): string => {
    let nuevoFolio: string = Math.random().toString();
    nuevoFolio = nuevoFolio.substring(nuevoFolio.length - +process.env.LONGITUD_FOLIO);

    return nuevoFolio;
}