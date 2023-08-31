import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto, UpdateAssignmentDto } from './dto';
import { Assignment } from './assignment.entity';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  create(@Body() createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
    return this.assignmentService.create(createAssignmentDto);
  }

  @Get()
  findAll(): Promise<Assignment[]> {
    return this.assignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Assignment | null> {
    return this.assignmentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment | null> {
    return this.assignmentService.update(id, updateAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.assignmentService.remove(id);
  }
}
