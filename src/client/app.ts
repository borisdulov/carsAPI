import { fetchCars } from "./fetchCars.ts";
import { Pagination } from "./pagination.ts";
import { displayList } from "./displayList.ts";

const app = async () => {
  const data = await fetchCars();
  const pagination = new Pagination(data, 5);

  const prevButton = document.getElementById('prev') as HTMLButtonElement;
  const nextButton = document.getElementById('next') as HTMLButtonElement;
  const listContainer = document.getElementById('list-container') as HTMLDivElement;
  const currentPage = document.getElementById('cur-page') as HTMLDivElement;
  currentPage.innerHTML = `Page ${pagination.getCurrentPage() + 1} of ${pagination.getPageCount()}`

  const pageData = pagination.getItems();
  displayList(pageData, listContainer);

  prevButton.addEventListener("click", () => {
    pagination.previousPage();
    const pageData = pagination.getItems();
    displayList(pageData, listContainer);
    currentPage.innerHTML = `Page ${pagination.getCurrentPage() + 1} of ${pagination.getPageCount()}`
  });

  nextButton.addEventListener("click", () => {
    pagination.nextPage();
    const pageData = pagination.getItems();
    displayList(pageData, listContainer);
    currentPage.innerHTML = `Page ${pagination.getCurrentPage() + 1} of ${pagination.getPageCount()}`
  });
}

app();