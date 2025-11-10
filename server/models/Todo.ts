import mongoose, { Schema, model} from "mongoose";


export interface ITodo {
  text: string;
  done: boolean;
}


const TodoSchema = new Schema<ITodo>(
  {
    text: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);


export const Todo =  model<ITodo> ("Todo", TodoSchema);

export default Todo;
