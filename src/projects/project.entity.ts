import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Assignment } from 'src/assignments/assignment.entity';
import { OneToMany } from 'typeorm';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @OneToMany(() => Assignment, (assignment) => assignment.project)
  assignments: Assignment[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
