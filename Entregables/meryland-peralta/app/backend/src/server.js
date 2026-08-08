const express = require("express");
const pool = require("./db");

const app = express();

const PORT = 4000;

app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido a la API de SalonBook");
});

// Obtener servicios desde PostgreSQL
app.get("/services", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM services ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    res.status(500).json({
      error: "Error al obtener los servicios",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});