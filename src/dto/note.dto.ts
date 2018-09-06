import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class CreateNoteDto {
    @ApiModelProperty({ minLength: 10 })
    @IsString()
    @MinLength(10)
    readonly text: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly owner: string

}

export class UpdateNoteDto {

    @ApiModelPropertyOptional({ minLength: 10 })
    @IsOptional()
    @IsString()
    @MinLength(10)
    readonly text: string;

    @ApiModelPropertyOptional()
    @IsString()
    @IsOptional()
    readonly owner: string
}