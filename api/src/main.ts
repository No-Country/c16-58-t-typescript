import { LoggingInterceptor } from './infrastructure/common/interceptor/logger.interceptor';
import { AllExceptionFilter } from './infrastructure/common/filter/exception.filter';
import { LoggerService } from './infrastructure/logger/logger.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'express-flash';
import passport from 'passport';
import { resolve } from 'path';
import {
  ResponseInterceptor,
  ResponseFormat,
} from '@/infrastructure/common/interceptor/response.interceptor';
/**
 * Initializes the application and starts the server.
 * @returns A Promise that resolves when the server is successfully started.
 */
async function bootstrap(): Promise<void> {
  const { PORT, NODE_ENV, SECRET_KEY_SESSION } = process.env; // Retrieve environment variables

  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Create the application

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService())); // Register the exception filter
  app.useGlobalPipes(new ValidationPipe()); // Register the validation pipe
  app.useGlobalInterceptors(
    new LoggingInterceptor(new LoggerService()), // Register the logging interceptor
    new ResponseInterceptor(), // Register the response interceptor
  );
  app.useStaticAssets(resolve('../../client/build'));
  app.setGlobalPrefix('api'); // Set the global prefix for all routes
  app.disable('x-powered-by', 'X-Powered-By'); // Disable the X-Powered-By header

  if (NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .addBearerAuth() // Enable Bearer token authentication in Swagger UI
      .setTitle('Group restaurant-reservation-manager') // Set the title of the API
      .setDescription('Simulation of restaurant management system') // Set the description of the API
      .setVersion('1.0') // Set the version of the API
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      extraModels: [ResponseFormat], // Include additional models in the Swagger document
      deepScanRoutes: true, // Enable deep scanning of routes to generate accurate API documentation
    });
    SwaggerModule.setup('api', app, document);
  }

  app.use(cookieParser()); // Enable cookie parsing
  app.use(
    session({
      secret: SECRET_KEY_SESSION,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: true, maxAge: 60000000 },
    }),
  ); // Enable session management
  app.use(passport.initialize()); // Enable passport authentication
  app.use(passport.session()); // Enable passport session management
  app.use(flash()); // Enable flash messages
  await app.listen(PORT || 3001); // Start the server
}
bootstrap();
