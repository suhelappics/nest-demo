import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Project } from '../projects/project.entity';
import { Test } from '../tests/test.entity';
import { SchemaFactory } from '@nestjs/mongoose';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.assignments)
  user: User;

  @ManyToOne(() => Project, (project) => project.assignments)
  project: Project;

  @ManyToOne(() => Test, (test) => test.assignments)
  test: Test;

  // Add any other relevant columns
}
export const AssignmentSchema = SchemaFactory.createForClass(Assignment);
