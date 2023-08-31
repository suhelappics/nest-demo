 
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Assignment } from '../assignments/assignment.entity';
import { OneToMany } from 'typeorm';

@Schema()
export class Test extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @OneToMany(() => Assignment, (assignment) => assignment.test)
  assignments: Assignment[];
}

export const TestSchema = SchemaFactory.createForClass(Test);
