import { IsString, MinLength, IsOptional, IsNotEmpty, } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  readonly name: string;

  @IsString()
  @MinLength(4)
  readonly username: string;
}

export class UpdateUserDto {
  @IsString()
  @MinLength(4)
  @IsOptional()
  readonly name: string;

  @IsString()
  @MinLength(4)
  @IsOptional()
  readonly username: string;
}