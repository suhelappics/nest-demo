export class CreateAssignmentDto {
  readonly userId: number;
  readonly projectId?: number;
  readonly testId?: number;
}

export class UpdateAssignmentDto {
  readonly userId?: number;
  readonly projectId?: number;
  readonly testId?: number;
}
