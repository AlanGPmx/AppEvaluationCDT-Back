import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const { API_PUERTO_MSO_APPEVALUATIONCDT, API_SERVIDOR_MSO_APPEVALUATIONCDT } = process.env;

  const mso: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: API_SERVIDOR_MSO_APPEVALUATIONCDT,
      port: +API_PUERTO_MSO_APPEVALUATIONCDT
    }
  }

  const app = await NestFactory.createMicroservice(AppModule, mso);
  await app.listen();
}
bootstrap();
