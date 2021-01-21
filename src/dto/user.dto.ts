import { ApiProperty } from "@nestjs/swagger";
import { IsString, Validate } from "class-validator";
import { IsTypeUser } from "../validator/type-user.validator";

export class UserDto {
 @IsString()
 @ApiProperty()

 name: string;

 @IsString()
 @ApiProperty()
 @Validate(IsTypeUser)
 type: string;
}