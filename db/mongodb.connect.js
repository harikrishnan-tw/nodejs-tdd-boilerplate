const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("successfully connected to the database");
  } catch (e) {
    console.error("Error connecting to MongoDB");
    console.error(e);
  }
}

async function closeAndDisconnect() {
  try {
    await mongoose.connection.close();
    await mongoose.disconnect();
    console.log("Disconnected and closed db connection");
  } catch(e) {
    console.error("Unable to close db connection");
    console.error(e);
  }
}

module.exports = { connect, closeAndDisconnect };
