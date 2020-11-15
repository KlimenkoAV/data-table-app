import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRoutingModule } from './data-routing.module';
import { DataService } from './services/data.services';
import { PaginationComponent, DataTableComponent } from './components';
import { DataPageComponent, DataPageJsonComponent, DataPageTableComponent } from './pages';


const COMPONENTS = [
  DataPageTableComponent,
  DataTableComponent,
  PaginationComponent,
  DataPageComponent,
  DataPageJsonComponent,
]
@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    SharedModule,
  ],
  providers: [DataService],
})
export class DataModule { }
