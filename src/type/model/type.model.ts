import { prop } from "@typegoose/typegoose";

export class TypeUser {
    @prop()
    id: string;

    @prop()
    type: string;

    @prop()
    description: string;
}