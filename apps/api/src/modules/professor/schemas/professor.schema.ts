import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProfessor, TSex } from '@todos/shared/interfaces';

export type ProfessorDocument = Professor & Document;

@Schema()
export class Professor implements IProfessor {
  _id: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  academicDegree: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  sex: TSex;

  @Prop({ required: true })
  passport: string;
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);
