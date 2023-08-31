 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Assignment } from './assignment.entity';
import { CreateAssignmentDto, UpdateAssignmentDto } from './dto';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
    const assignment = this.assignmentRepository.create(createAssignmentDto);
    return this.assignmentRepository.save(assignment);
  }

  async findAll(): Promise<Assignment[]> {
    return this.assignmentRepository.find();
  }

  async findOne(id: number): Promise<Assignment | null> {
    return this.assignmentRepository.findOne(id);
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment | null> {
    const assignment = await this.assignmentRepository.findOne(id);
    if (!assignment) {
      return null;
    }

    if (updateAssignmentDto.projectId) {
      // If projectId is provided, find the corresponding project and assign it
      const project = await this.projectRepository.findOne(updateAssignmentDto.projectId);
      if (project) {
        assignment.project = project;
      }
    }

    if (updateAssignmentDto.testId) {
      // If testId is provided, find the corresponding test and assign it
      const test = await this.testRepository.findOne(updateAssignmentDto.testId);
      if (test) {
        assignment.test = test;
      }
    }

    return this.assignmentRepository.save(assignment);
  }

  async remove(id: number): Promise<void> {
    await this.assignmentRepository.delete(id);
  }
}