import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../schemas/employee.schema';

@Controller('api/employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Employee[]> {
    return this.employeeService.findAll(page, limit);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() employee: Employee,
  ): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.delete(id);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findById(id);
  }
}
