import { IsString, MinLength, IsOptional, IsNotEmpty, } from "class-validator";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiModelProperty({ minLength: 4 })
  @IsString()
  @MinLength(4)
  readonly name: string;

  @ApiModelProperty({ minLength: 4 })
  @IsString()
  @MinLength(4)
  readonly username: string;
}

export class UpdateUserDto {
  @ApiModelPropertyOptional({ minLength: 4 })
  @IsString()
  @MinLength(4)
  @IsOptional()
  readonly name: string;

  @ApiModelPropertyOptional({ minLength: 4 })
  @IsString()
  @MinLength(4)
  @IsOptional()
  readonly username: string;
}