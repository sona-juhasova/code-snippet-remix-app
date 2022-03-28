import { mongoose } from "mongoose";

const { Schema } = mongoose;

const snippetsSchema = new Schema({
  title: String,
  description: String,
  code_snippet: String,
  language: String,
  favourite : Boolean

});

export const models = [
  {
    name: "Code Snippets",
    schema: snippetsSchema,
    collection: "code-snippets",
  },
];