import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IDepartment } from '@todos/shared/interfaces';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department implements IDepartment {
  _id: string;

  @Prop({ required: true })
  title: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
