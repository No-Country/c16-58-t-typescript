import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

/**
 * Data transfer object for authenticating a user.
 */
export class AuthLoginDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true })
  @IsStrongPassword()
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

/**
 * Data transfer object for registering a new user.
 */
export class AuthRegisterDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true })
  @IsStrongPassword()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty({ required: true })
  @IsStrongPassword()
  @IsNotEmpty()
  @IsString()
  readonly confirmPassword: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;
}
