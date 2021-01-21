import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeUserModule } from './type/type-user.module';

@Module({
  imports: [
    TypeUserModule
  ],
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
