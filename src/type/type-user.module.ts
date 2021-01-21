import { Module } from '@nestjs/common';
import { IsTypeUser } from '../validator/type-user.validator';
import { TypeUserService } from './type-user.service';

@Module({
  imports: [],
  providers: [TypeUserService, IsTypeUser],
  exports: [TypeUserService]
})
export class TypeUserModule {}
