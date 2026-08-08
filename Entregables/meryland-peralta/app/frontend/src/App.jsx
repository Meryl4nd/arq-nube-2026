import { useEffect, useState } from "react";
import "./App.css";

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
    <div className="container">

      <header className="header">
        <h1>💇 SalonBook</h1>

        <p>
          Reserva tu cita de belleza de forma rápida y sencilla.
        </p>
      </header>

      <h2>Servicios disponibles</h2>

      <div className="services">

        {services.map((service) => (
          <div className="service-card" key={service.id}>

            <h3>{service.name}</h3>

            <p className="price">
              S/ {service.price}
            </p>

            <button>
              Reservar cita
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;