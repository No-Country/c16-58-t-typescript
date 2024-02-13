import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents the presenter for the IsAuth functionality.
 */
export class IsAuthPresenter {
  @ApiProperty()
  username: string;
}
