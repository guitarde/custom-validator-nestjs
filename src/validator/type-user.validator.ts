
import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { TypeUserService } from '../type/type-user.service';

@Injectable()
@ValidatorConstraint({ name: 'IsTypeUser', async: false })
export class IsTypeUser implements ValidatorConstraintInterface {

  constructor(readonly typeService: TypeUserService) {}

  async validate(actionName: string, args: ValidationArguments) {
   console.log("in validator")
    const values = await this.typeService.findType();
    return values.find(e => e.type === actionName ) ? true : false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid action outreach type';
  }
}
