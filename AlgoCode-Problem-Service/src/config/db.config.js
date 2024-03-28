const mongoose = require("mongoose");
const { NODE_ENV } = require("./server.config");

async function connectToDb() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(process.env.DB_URL);
    } else if (NODE_ENV === "production") {
      await mongoose.connect(process.env.DB_URL_PROD);
    }
    console.log("Connected to the database");
  } catch (err) {
    console.error("Failed to connect to the database");
    console.error(err);
  }
}
export default connectToDb;