export class CreateProjectDto {
  readonly name: string;
  readonly description: string;
}

export class UpdateProjectDto {
  readonly name?: string;
  readonly description?: string;
}
