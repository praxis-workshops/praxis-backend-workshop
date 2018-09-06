import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from '../schemas/note';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
    providers: [NotesService],
    controllers: [NotesController]
})
export class NotesModule { }
