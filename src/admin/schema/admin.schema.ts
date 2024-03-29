import { Schema, Document } from 'mongoose';
export const BookSchema = new Schema({
    title: String,
    author: String,
});

export interface Book extends Document {
    title: string;
    author: string;
}