import { Injectable } from '@nestjs/common';
import { TypeUser } from './model/type.model';

@Injectable()
export class TypeUserService {

    async findType(): Promise<TypeUser[]>{
        const typeUsers = [
            {
                "id": "3983b131-263e-4b8f-82af-a57614707aca",
                "type": "user",
                "description": "User" 
           },
           {
                "id": "3983b131-263e-4b8f-82af-a57614707acb",
                "type": "admin",
                "description": "admin" 
            }
        ];
        return Promise.resolve(typeUsers);
    }

}
