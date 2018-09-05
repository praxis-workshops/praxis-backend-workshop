import { CreateNoteDto, UpdateNoteDto } from 'dto/note.dto';

import {
    Body, Controller, Delete,
    Get, Param, Patch,
    Post, UsePipes, ValidationPipe,
} from '@nestjs/common';

import { NotesService } from './notes.service';

import { ObjectIdPipe } from '../pipes/valid-object-id.pipe';
import { EmptyObjectPipe } from '../pipes/empty-object.pipe';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) { }

    @Delete(':id')
    async remove(@Param('id', new ObjectIdPipe()) id: string) {
        return await this.notesService.remove(id);
    }

    @Get()
    async findAll(): Promise<any> {
        return this.notesService.findAll();
    }

    @Get(':id')
    async findById(@Param('id', new ObjectIdPipe()) id: string): Promise<any> {
        return await this.notesService.findById(id);
    }

    @Patch(':id')
    async update(
        @Param('id', new ObjectIdPipe()) id: string,
        @Body(new EmptyObjectPipe(), new ValidationPipe({ transform: true })) updateNoteDto: UpdateNoteDto
    ): Promise<any> {
        return await this.notesService.update(id, updateNoteDto);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() CreateNoteDto: CreateNoteDto): Promise<CreateNoteDto> {
        return await this.notesService.create(CreateNoteDto);
    }
}