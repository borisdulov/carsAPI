export async function fetchCars(): Promise<any[]> {
  const response = await fetch('/cars.json');
  const data = await response.json();
  return data['cars'];
}