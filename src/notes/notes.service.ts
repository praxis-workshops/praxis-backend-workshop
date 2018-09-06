import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDto, UpdateNoteDto } from 'dto/note.dto';

@Injectable()
export class NotesService {

    constructor(@InjectModel('Note') private readonly noteModel) { }

    async create(note: CreateNoteDto): Promise<CreateNoteDto> {
        return await this.noteModel.create(note);
    }

    async findAll(): Promise<any[]> {
        return await this.noteModel.find();
    }

    async findById(id: string): Promise<any> {
        return await this.noteModel.findById(id);
    }

    async remove(id: string) {
        return await this.noteModel.deleteOne({ _id: id });
    }
    async update(id: string, note: UpdateNoteDto) {
        return await this.noteModel.updateOne({ _id: id }, { $set: note });
    }

}
