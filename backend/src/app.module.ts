import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './modules/employee/employee.module';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URI), EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
