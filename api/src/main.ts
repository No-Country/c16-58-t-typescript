import {
  ResponseInterceptor,
  ResponseFormat,
} from './infrastructure/common/interceptor/response.interceptor';
import { LoggingInterceptor } from './infrastructure/common/interceptor/logger.interceptor';
import { AllExceptionFilter } from './infrastructure/common/filter/exception.filter';
import { LoggerService } from './infrastructure/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Initializes the application and starts the server.
 * @returns {Promise<void>}
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  app.useGlobalPipes(new ValidationPipe());

  const env = process.env.PUBLIC_NODE_ENV;
  const port = process.env.PUBLIC_PORT;
  console.log({ processENV: process.env, port, env });
  if (env !== 'production') {
    // In non-production environments, add LoggingInterceptor and ResponseInterceptor as global interceptors
    app.useGlobalInterceptors(
      new LoggingInterceptor(new LoggerService()),
      new ResponseInterceptor(),
    );
  }
  const config = new DocumentBuilder()
    .addBearerAuth() // Enable Bearer token authentication in Swagger UI
    .setTitle('Group c16-58-t-typescript') // Set the title of the API
    .setDescription('Simulation of restaurant management system') // Set the description of the API
    .setVersion('1.0') // Set the version of the API
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [ResponseFormat], // Include additional models in the Swagger document
    deepScanRoutes: true, // Enable deep scanning of routes to generate accurate API documentation
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(port || 3001);
}
bootstrap();
