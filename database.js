import mongoose from "mongoose";

export async function mongoConnect() {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
        dbName: "pet_db",
      });
      console.log("Mongodb: Verbindung hergestellt");
    } catch (error) {
      console.log(error.message);
    }
  }