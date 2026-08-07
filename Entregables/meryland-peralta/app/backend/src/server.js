const express = require("express");

const app = express();

const PORT = 4000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido a la API de SalonBook");
});

// Ruta para obtener los servicios
app.get("/services", (req, res) => {
  const services = [
    { id: 1, name: "Corte de cabello", price: 25 },
    { id: 2, name: "Manicure", price: 35 },
    { id: 3, name: "Pedicure", price: 40 },
    { id: 4, name: "Tinturado", price: 80 }
  ];

  res.json(services);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});