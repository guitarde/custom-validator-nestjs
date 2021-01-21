import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

class Main {
  public async bootstrap() {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const app: INestApplication = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log', 'debug'],
      cors: true
    });

    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    await this.configureSwagger(app);
    await app.listen(8080);
  }

  private async configureSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('Care-Engagement-API')
      .setDescription('Nestjs microservices for care engagement data managing')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, options);
    app.useGlobalPipes(new ValidationPipe());
    SwaggerModule.setup('api', app, document);
  }
}

new Main().bootstrap();
