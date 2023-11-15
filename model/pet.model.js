import { Schema, model } from 'mongoose';

const petSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        default: 1,
    },
    kind: {
        type: String,
    },
});

export const PetModel = model('Pet', petSchema);