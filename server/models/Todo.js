import mongoose, { Schema, model } from 'mongoose';

const TodoSchema = new Schema(
  {
    text: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Todo = model('Todo', TodoSchema);

export default Todo;
