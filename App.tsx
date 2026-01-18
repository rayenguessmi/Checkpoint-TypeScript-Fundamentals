import { useEffect } from "react";
import "./App.css";
import { Car } from "./vehicle";

function App() {
  useEffect(() => {
    const car = new Car("Toyota", "Corolla", 2024);
    car.start();
  }, []);

  return (
    <>
      <h1>Vehicle</h1>
      <p>Check the console for vehicle output.</p>
    </>
  );
}

export default App;