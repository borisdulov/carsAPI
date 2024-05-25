export class Pagination<T> {
  private items: T[];
  private itemsPerPage: number;
  private currentPage: number;
  private totalPages: number;

  constructor(items: T[], itemsPerPage: number) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 0;
    this.totalPages = Math.ceil(items.length / itemsPerPage);
  }

  public getItems(): T[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
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
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  public firstPage(): void {
    this.currentPage = 0;
  }

  public lastPage(): void {
    this.currentPage = this.totalPages - 1;
  }
}