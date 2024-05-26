// function for displaying array of objects in html
export async function displayList(items: any[], container: HTMLDivElement) {
  // clearing previous data
  container.innerHTML = '';
  // cycling through items and creating div for each in the container
  Object.entries(items).forEach(([key, value]) => {
    const element = document.createElement('div');
    element.innerHTML = `
      <h3>${value.car} ${value.car_model} ${value.car_model_year}</h3>
      <p>${value.price}</p>
    `;
    container.appendChild(element);
  });
}