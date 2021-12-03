export type TSex = 'M' | 'F';

export interface IProfessor {
  _id: string;
  department: string;
  position: string;
  academicDegree: string;
  fullName: string;
  dateOfBirth: Date;
  sex: TSex;
  passport: string;
}

export interface IProfessorDto {
  department: string;
  position: string;
  academicDegree: string;
  fullName: string;
  dateOfBirth: Date;
  sex: TSex;
  passport: string;
}
