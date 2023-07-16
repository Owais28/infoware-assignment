// employee.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Contact {
  @Prop()
  type: string | 'primary | secondary';

  @Prop()
  value: string;

  @Prop()
  relation: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop([Contact])
  contacts: Contact[];

  @Prop()
  email: string;

  @Prop()
  phone: number;

  @Prop()
  job: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  state: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
