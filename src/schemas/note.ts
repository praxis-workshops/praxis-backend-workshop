import { Schema } from 'mongoose';

export const NoteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
}, {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    });
