import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessorModule } from '../professor/professor.module';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [
    // change to Atlas cloud
    MongooseModule.forRoot('mongodb://localhost/todos'),
    ProfessorModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
