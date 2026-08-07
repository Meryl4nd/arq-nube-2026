import { useEffect, useState } from "react";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error al obtener los servicios:", error);
      });
  }, []);

  return (
    <div>
      <h1>💇 SalonBook</h1>

      <h2>Servicios disponibles</h2>

      {services.map((service) => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>Precio: S/ {service.price}</p>
          <button>Reservar cita</button>
        </div>
      ))}
    </div>
  );
}

export default App;