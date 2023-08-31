// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Assignment } from '../assignments/assignment.entity';
import { OneToMany } from 'typeorm';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  age: number;

  @OneToMany(() => Assignment, (assignment) => assignment.user)
  assignments: Assignment[];
}

export const UserSchema = SchemaFactory.createForClass(User);
