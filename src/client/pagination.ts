// class for pagination
export class Pagination<T> {
  private currentPage: number;
  private totalPages: number;

  constructor(totalPages: number) {
    this.currentPage = 1;
    this.totalPages = totalPages;
  }

  public getPageCount(): number {
    return this.totalPages;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public setPage(page: number): void {
    if (page < 0 || page >= this.totalPages) {
      throw new Error(`Invalid page number: ${page}`);
    }
    this.currentPage = page;
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  public previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public firstPage(): void {
    this.currentPage = 0;
  }

  public lastPage(): void {
    this.currentPage = this.totalPages - 1;
  }

  // на будущее, для кнопок с номером страницы (я передумал это делать, мне лень)
  public updateButtons(): void {
    const pageButtons = document.getElementById('page-buttons') as HTMLDivElement;
    pageButtons.innerHTML = '';
  }
}