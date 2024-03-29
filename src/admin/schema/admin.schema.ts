import { Schema, Document } from 'mongoose';
export const adminSchema = new Schema({
    username: String,
    password: String,
});

export interface admin extends Document {
    username: String,
    password: String,
}