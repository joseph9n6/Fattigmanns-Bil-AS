require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const carRoutes = require("./routes/carRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    console.log("🚀 Starter backend...");
    console.log("⏳ Venter på databasekobling...");

    await connectDB();

    app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );

    app.use(express.json());

    app.use("/api/cars", carRoutes);

    app.get("/", (req, res) => {
      res.status(200).json({
        success: true,
        message: "Fattigmanns Bil AS API kjører",
      });
    });

    app.listen(PORT, () => {
      console.log("✅ Backend kjører");
      console.log(`🌐 API: http://localhost:${PORT}`);
      console.log(`🚗 Biler: http://localhost:${PORT}/api/cars`);
      console.log("🟢 Serveren er klar til bruk");
    });
  } catch (error) {
    console.error("❌ Backend kunne ikke starte");
    console.error(`Feil: ${error.message}`);
    process.exit(1);
  }
}

startServer();