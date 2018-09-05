import { Schema } from 'mongoose';
import { UserSchema } from './user';

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