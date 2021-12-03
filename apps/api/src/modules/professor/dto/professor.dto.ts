import { IProfessorDto, TSex } from '@todos/shared/interfaces';

export class ProfessorDto implements IProfessorDto {
  department: string;
  position: string;
  academicDegree: string;
  fullName: string;
  dateOfBirth: Date;
  sex: TSex;
  passport: string;
}
