import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const { API_PUERTO_MSO_TRANSACCIONES, API_SERVIDOR_MSO_TRANSACCIONES } = process.env;

  const mso: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: API_SERVIDOR_MSO_TRANSACCIONES,
      port: +API_PUERTO_MSO_TRANSACCIONES
    }
  }

  const app = await NestFactory.createMicroservice(AppModule, mso);
  await app.listen();
}
bootstrap();
