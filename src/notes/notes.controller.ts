import {
    Body, Controller, Delete,
    Get, Param, Patch,
    Post, UsePipes, ValidationPipe,
} from '@nestjs/common';

import {
    ApiCreatedResponse, ApiUseTags,
    ApiOkResponse, ApiBadRequestResponse
} from '@nestjs/swagger';

import { NotesService } from './notes.service';

import { ObjectIdPipe } from '../pipes/valid-object-id.pipe';
import { EmptyObjectPipe } from '../pipes/empty-object.pipe';
import { CreateNoteDto, UpdateNoteDto } from 'dto/note.dto';

@ApiUseTags('notes')
@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) { }

    @ApiOkResponse({ description: "Note with identifier :id deleted" })
    @ApiBadRequestResponse({ description: "The param is not valid" })
    @Delete(':id')
    async remove(@Param('id', new ObjectIdPipe()) id: string) {
        return await this.notesService.remove(id);
    }

    @ApiOkResponse({ description: "All notes", type: [CreateNoteDto] })
    @Get()
    async findAll(): Promise<any> {
        return this.notesService.findAll();
    }

    @ApiOkResponse({ description: "Note with identifier :id", type: CreateNoteDto })
    @Get(':id')
    async findById(@Param('id', new ObjectIdPipe()) id: string): Promise<any> {
        return await this.notesService.findById(id);
    }

    @ApiOkResponse({ description: "Note with identifier :id updated" })
    @ApiBadRequestResponse({ description: "The request body or id param are not valid" })
    @Patch(':id')
    async update(
        @Param('id', new ObjectIdPipe()) id: string,
        @Body(new EmptyObjectPipe(), new ValidationPipe({ transform: true })) updateNoteDto: UpdateNoteDto
    ): Promise<any> {
        return await this.notesService.update(id, updateNoteDto);
    }

    @ApiCreatedResponse({ description: 'Note created successfully', type: CreateNoteDto })
    @ApiBadRequestResponse({ description: "The request body is not valid" })
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() CreateNoteDto: CreateNoteDto): Promise<CreateNoteDto> {
        return await this.notesService.create(CreateNoteDto);
    }
}