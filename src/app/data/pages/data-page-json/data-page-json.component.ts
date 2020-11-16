import { DataService } from '@data/services';
import { ExportData } from '@data/interfaces';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-data-page-json',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './data-page-json.component.html',
  styleUrls: ['./data-page-json.component.scss']
})
export class DataPageJsonComponent implements OnInit {
  data$: Observable<ExportData>;

  paginationControl = new FormControl(1);

  constructor( private dataService:DataService ){

  }
  ngOnInit() {
    this.data$ = this.paginationControl.valueChanges.pipe(
      startWith(1),
      switchMap(page => this.dataService.getJSON()),
    )
  }

  onPageChange(page: number){
    this.paginationControl.setValue(page);   
  }
}
