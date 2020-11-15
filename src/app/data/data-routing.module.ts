import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataPageTableComponent } from '@app/data/pages/data-page-table/data-page-table.component';
import { DataPageJsonComponent } from './pages/data-page-json/data-page-json.component';
import { DataPageComponent } from './pages/data-page/data-page.component';

export const routes: Routes = [
  { path: '', 
  component: DataPageComponent,
  children:[
    {
      path: '', 
      redirectTo: 'table', pathMatch: 'full' 
    },
    { path: 'table', component: DataPageTableComponent },
    { path: 'json', component: DataPageJsonComponent },
]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule {}
