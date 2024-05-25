interface Car {
  id: number;
  car: string;
  car_model: string;
  car_model_year: number;
}

async function fetchCars(): Promise<Car[]> {
  const response = await fetch('/cars.json');
  const data = await response.json();
  return data['cars'];
}

async function displayCars() {
  const cars = await fetchCars();
  const carsContainer = document.getElementById('cars-container');

  if (cars && carsContainer) {
    Object.entries(cars).forEach(([key, value]) => {
      const carElement = document.createElement('div');
      carElement.innerHTML = `
        <h3>${value.car} ${value.car_model}</h3>
      `;
      carsContainer.appendChild(carElement);
    });
  }
}

export default displayCars;