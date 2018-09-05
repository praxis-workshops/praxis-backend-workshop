import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNoteDto {

    @IsString()
    @MinLength(10)
    readonly text: string;

    @IsString()
    @IsNotEmpty()
    readonly owner: string

}

export class UpdateNoteDto {

    @IsOptional()
    @IsString()
    @MinLength(10)
    readonly text: string;

    @IsString()
    @IsOptional()
    readonly owner: string
}