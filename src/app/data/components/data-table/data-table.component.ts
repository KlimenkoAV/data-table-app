import { ExportData } from '../../interfaces/exportData.interface';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges {
  @Input() data: ExportData;
  @ViewChild('table', {static: true}) private table: ElementRef;

  ngOnChanges(sp: SimpleChanges){
    if (sp.data && this.data){
      this.table.nativeElement.style['grid-template-columns'] = `repeat(${this.data.meta.columns.length}, 1fr)`;
    }
  }
}
