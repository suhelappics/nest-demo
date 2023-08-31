import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto, UpdateTestDto } from './dto';
import { Test } from './test.entity';

@Controller('tests')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto): Promise<Test> {
    return this.testService.create(createTestDto);
  }

  @Get()
  findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Test | null> {
    return this.testService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateTestDto,
  ): Promise<Test | null> {
    return this.testService.update(id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Test | null> {
    return this.testService.remove(id);
  }
}
