export const bd = () => ({
    user: process.env['BD_USUARIO'],
    password: process.env['BD_CLAVE'],
    database: process.env['BD_NOMBRE'],
    server: process.env['BD_SERVIDOR'],
    pool: {
        max: +process.env['BD_MAX_CONEXIONES'],
        min: +process.env['BD_MIN_CONEXIONES'],
        idleTimeoutMillis: +process.env['BD_TIEMPO_DE_ESPERA_INACTIVO']
    },
    options: {
        encrypt: process.env['BD_ENCRIPTAR'] === 'true',
        trustServerCertificate: process.env['BD_CERTIFICADO_DE_SERVIDOR'] === 'true'
    }
});