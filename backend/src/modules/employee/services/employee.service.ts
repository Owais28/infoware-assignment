// employee.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<Employee>,
  ) {}

  // handler for creating new employee in database
  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = new this.employeeModel(employee);
    return createdEmployee.save();
  }

  async findAll(page: number, limit: number): Promise<Employee[]> {
    return this.employeeModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    return this.employeeModel.findByIdAndUpdate(id, employee, { new: true });
  }

  async delete(id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndDelete(id);
  }

  async findById(id: string): Promise<Employee> {
    return this.employeeModel.findById(id);
  }
}
