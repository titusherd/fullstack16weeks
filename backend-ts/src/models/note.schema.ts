import { Schema, model } from "mongoose";
import { INote } from "../../types/entity";

const noteSchema = new Schema<INote>({
  content: String,
  isDone: Boolean,
  authorName: String,
});

export const Note = model("Note", noteSchema);
