export async function displayList(items: any[], container: HTMLDivElement) {
  container.innerHTML = '';
  Object.entries(items).forEach(([key, value]) => {
    const element = document.createElement('div');
    element.innerHTML = `<h3>${value.car} ${value.car_model}</h3>`;
    container.appendChild(element);
  });
}