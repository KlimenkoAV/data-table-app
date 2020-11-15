import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, range as observableRange } from 'rxjs';
import { toArray, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnChanges {

  @Input() offset = 0;
  @Input() limit = 1;
  @Input() size = 1000;
  @Input() range = 3;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  public currentPage: number;
  public totalPages: number;
  public pages$: Observable<number[]>;

  public goToPage: number;

  constructor() { }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.getPages(this.offset, this.limit, this.size);
    }
  }

  private getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages$ = observableRange(-this.range, this.range * 2 + 1).pipe(
      map(pageOffset => this.currentPage + pageOffset),
      filter(page => this.isValidPageNumber(page, this.totalPages)),
      toArray(),
    );
  }

  private getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  private getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  private isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  public selectPage(page: number, event) {
    this.cancelEvent(event);
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.pageChange.emit((page - 1) * this.limit);
    } else {
      this.pageChange.emit((this.totalPages - 1) * this.limit);
      this.goToPage = this.totalPages;
    }
  }

  public cancelEvent(event) {
    event.preventDefault();
  }
}
