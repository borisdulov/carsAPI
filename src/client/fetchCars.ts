// function for fetching data from api
export async function fetchCars(curPage: number, perPage: number): Promise<any[]> {
  // adding query params
  const urn: string = `/cars.json?curPage=${curPage}&perPage=${perPage}`
  // fetching
  const response = await fetch(urn);
  const data = await response.json();
  return data;
}