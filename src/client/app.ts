import { fetchCars } from "./fetchCars.ts";
import { Pagination } from "./pagination.ts";
import { displayList } from "./displayList.ts";

const app = async () => {
  // creating pagination object
  const perPage = 5;
  const totalItems: string = await fetch('/carsAmmount').then((response) => response.text());
  const totalPages: number = Math.ceil(Number(totalItems) / perPage);
  const pagination = new Pagination(totalPages);

  // getting html elements
  const prevButton = document.getElementById('prev') as HTMLButtonElement;
  const nextButton = document.getElementById('next') as HTMLButtonElement;
  const listContainer = document.getElementById('list-container') as HTMLDivElement;
  const currentPage = document.getElementById('cur-page') as HTMLDivElement;

  // displaying first page
  currentPage.innerHTML = `${pagination.getCurrentPage()} of ${pagination.getPageCount()}`
  const data = await fetchCars(1, 5);
  displayList(data, listContainer);

  // updating pagination and updating page, when next page button is clicked
  prevButton.addEventListener("click", async () => {
    pagination.previousPage();
    const page = pagination.getCurrentPage();
    const data = await fetchCars(page, 5);
    displayList(data, listContainer);
    currentPage.innerHTML = `${pagination.getCurrentPage()} of ${pagination.getPageCount()}`
  });

  // updating pagination and updating page, when previous page button is clicked
  nextButton.addEventListener("click", async () => {
    pagination.nextPage();
    const page = pagination.getCurrentPage();
    const data = await fetchCars(page, 5);
    displayList(data, listContainer);
    currentPage.innerHTML = `${pagination.getCurrentPage()} of ${pagination.getPageCount()}`
  });
}

app();