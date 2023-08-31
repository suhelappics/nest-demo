import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users/users.controller';
import { UserService } from './users/user.service';
import { User, UserSchema } from './users/user.entity';
import { ProjectController } from './projects/project.controller';
import { ProjectService } from './projects/project.service';
import { Project, ProjectSchema } from './projects/project.entity';
import { TestController } from './tests/test.controller';
import { TestService } from './tests/test.service';
import { Test, TestSchema } from './tests/test.entity';
import { AssignmentController } from './assignments/assignment.controller';
import { AssignmentService } from './assignments/assignment.service';
import { Assignment, AssignmentSchema } from './assignments/assignment.entity';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost/nestjs_crud_app',
        useUnifiedTopology: true,
      }),
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Project.name, schema: ProjectSchema },
      { name: Test.name, schema: TestSchema },
      { name: Assignment.name, schema: AssignmentSchema },
    ]),
  ],
  controllers: [
    UserController,
    ProjectController,
    TestController,
    AssignmentController,
  ],
  providers: [UserService, ProjectService, TestService, AssignmentService],
})
export class AppModule {}
