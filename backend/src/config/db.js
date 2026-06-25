const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("⏳ Kobler til MongoDB...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB er koblet til");
    console.log(`📦 Database: ${mongoose.connection.name}`);
    console.log(`🌐 Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ Kunne ikke koble til MongoDB");
    console.error(`Feil: ${error.message}`);

    process.exit(1);
  }
}

module.exports = connectDB;