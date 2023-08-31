export class CreateTestDto {
  readonly name: string;
  readonly description: string;
}

export class UpdateTestDto {
  readonly name?: string;
  readonly description?: string;
}