import mongoose from "mongoose";
import { models } from "./models.js";

const { MONGODB_URL, NODE_ENV } = process.env;

if (!MONGODB_URL) {
  if (NODE_ENV === "production") {
    throw new Error(
      "Please define the MONGODB_URL environment variable — pointing to your full connection string, including database name."
    );
  } else {
    throw new Error(
      "Please define the MONGODB_URL environment variable inside an .env file — pointing to your full connection string, including database name."
    );
  }
}
 
export default async function connectDb() { 
  if (mongoose.connection?.readyState > 0) {
    return mongoose.connection;
  }
 
  const conn = await mongoose
    .connect(MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((connection) => {
      console.log("Mongoose connected in %s", NODE_ENV);
      return connection;
    });
 
  for (const model of models) {
    conn.model(model.name, model.schema, model.collection);
  }

  return conn;
}
