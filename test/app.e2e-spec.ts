import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeUserService } from '../src/type/type-user.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: []
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe("Happy Path", () => {
    describe("get UserType", () => {
        fit('/user (POST)', async () => {
          const userDTO = {
            "name": "123",
            "type": "admin"
          }

          await request(app.getHttpServer())
              .post(`/`)
              .send(userDTO)
              .expect(HttpStatus.CREATED);
        });
    });
  });
});
