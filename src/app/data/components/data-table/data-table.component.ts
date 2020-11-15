import { ExportData } from '../../interfaces/exportData.interface';
import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() data: ExportData;
  @ViewChild('table', {static: true}) private table: ElementRef;

  ngOnInit(){
  }

  ngOnChanges(sp: SimpleChanges){
    if(sp.data && this.data ){
      this.table.nativeElement.style['grid-template-columns'] = `repeat(${this.data.meta.columns.length}, 1fr)`;
    }
  }

  ngAfterContentInit(){
  }
  
}
