import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
}, {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    }
  });